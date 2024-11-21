/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Form, Input, InputNumber, message, Radio, Select, Skeleton, Upload } from 'antd'
import { PlusOutlined } from "@ant-design/icons";
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AdminProductsEditPage = () => {
    const token = localStorage.getItem("token");
    const { id } = useParams();
    // console.log(id);
    
    const [imagesList, setImagesList] = useState([]);
    const [images, setImages] = useState<string[]>([]);
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data.data);
            
            return { key: id, ...data.data };
        }
    })

    useEffect(() => {
        if (data?.images) {
            setImages(data.images);
            setImagesList(data.images.map((url: string, index: number) => ({
                uid: index,
                name: `image-${index}`,
                status: "done",
                url: url,
            })))
        }
    }, [data])

    const { mutate } = useMutation({
        mutationFn: async (formData) => {
            const response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            })
            return await response.json();
        },
        onSuccess: () => {
            messageApi.success("Updated Product Successfully");
            setTimeout(() => {
                navigate("/admin/products")
            }, 2000)
        },
        onError: (error) => {
            console.log(error.message);
        }
    })

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    }

    const onHandleChange = (info: any) => {
        if (info.file.status === "done") {
            setImages([...images, info.file.response.secure_url]);
        }
    }

    const onFinish = (values: any) => {
        mutate({ ...values, images });
    }

    if (isLoading) return <Skeleton active></Skeleton>

    return (
        <div className="">
            {contextHolder}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={data}
                onFinish={onFinish}
            >
                <Form.Item label="Name of Product" name="name" rules={[
                    { required: true, message: "Please enter the product name" },
                    { min: 3, message: "Please enter more than 3 characters" }
                ]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Price" name="price" rules={[
                    { required: true, message: "Please enter the product price" },
                    { type: "number", min: 0, message: "Please enter a non-negative price" }
                ]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item label="Upload Image" valuePropName='fileList' getValueFromEvent={normFile}>
                    <Upload
                        key={imagesList.length}
                        action="https://api.cloudinary.com/v1_1/lesson-image/image/upload"
                        listType="picture-card"
                        multiple={true}
                        data={{
                            upload_preset: "dungnt"
                        }}
                        onChange={onHandleChange}
                        defaultFileList={imagesList}
                    >
                        <button style={{ border: 0, background: "none" }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[
                    { required: true, message: "Please enter the description" }
                ]}>
                    <TextArea />
                </Form.Item>

                <Form.Item label="Radio" name="inStock" rules={[
                    { required: true, message: "Please select the product status" }
                ]}>
                    <Radio.Group>
                        <Radio value={true}> Instock </Radio>
                        <Radio value={false}> Outstock </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Category" name="category" rules={[
                    { required: true, message: "Please select the product category" }
                ]}>
                    <Select>
                        <Select.Option value="Category 1">Category 1</Select.Option>
                        <Select.Option value="Category 2">Category 2</Select.Option>
                        <Select.Option value="Category 3">Category 3</Select.Option>
                        <Select.Option value="Category 4">Category 4</Select.Option>
                        <Select.Option value="Category 5">Category 5</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AdminProductsEditPage