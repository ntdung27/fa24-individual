/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Image, message, Popconfirm, Space, Table, Tag } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const AdminProductsPage = () => {
    const token = localStorage.getItem("token");
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["PRODUCTS_KEY"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/api/products", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            const data = await response.json();
            // console.log(data);
            return data.data.map((items: any) => ({
                key: items.id,
                ...items,
            }));
        },
    });

    const { mutate } = useMutation({
        mutationFn: async (_id: string) => {
            await fetch(`http://localhost:3000/api/products/${_id}`, { method: "DELETE" })
        },
        onSuccess: () => {
            message.success('Deleted Successfully');
            // rerender list
            queryClient.invalidateQueries({
                queryKey: ["PRODUCTS_KEY"],
            })
        }
    });

    if (isLoading) return <div>Loading...</div>

    const columns = [
        {
            title: 'Image',
            dataIndex: 'images',
            key: 'images',
            width: "20%",
            render: (text: string[]) => {
                // text?.map((items: string) => console.log(items))
                return text.map((items: string, index: number) => <Image key={index} width={70} height={70} src={items}></Image>)
            }
        },
        {
            title: 'Name of Product',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: "Stock",
            dataIndex: "inStock",
            key: "inStock",
            render: (inStock: boolean) => {
                return inStock ? (
                    <Tag color="green">Instock</Tag>
                ) : (
                    <Tag color="red">Outstock</Tag>
                );
            },
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <a>
                        <Popconfirm
                            title="Delete Product"
                            description="Are you sure to delete this product?"
                            onConfirm={() => mutate(record._id)}
                            onCancel={() => message.error('Deleted Failed')}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type='link'>Delete</Button>
                        </Popconfirm>
                    </a>
                    <Link to={`/admin/products/edit/${record._id}`}>
                        <Button type='link'>Edit</Button>
                    </Link>
                </Space>
            ),
        },
    ];
    return <div>
        <h1 className='text-4xl font-bold mb-5'>Product Management</h1>
        <Link to={`/admin/products/add`}>
            <Button type='primary'>Add new Products</Button>
        </Link>
        <Table dataSource={data} columns={columns} />
    </div>
};

export default AdminProductsPage;