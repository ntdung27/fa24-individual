/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: async (formData) => {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            return response.json();
        },
        onSuccess: () => {
            form.resetFields();
            messageApi.open({
                type: "success",
                content: "Signup Successfully"
            })
            setTimeout(() => {
                navigate("/signin")
            }, 1000)
        }
    })

    const onFinish = (values: any) => {
        mutate(values);
    }

    return <div>
        {contextHolder}
        <div className="">
            <h1 className="text-3xl font-semibold py-5 ms-[720px]">Sign Up</h1>
        </div>
        <Form
            name="basic"
            className="mx-auto"
            form={form}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            disabled={isPending}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, {type: "email", min: 3, message: "Email formation is not correct"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' },{min: 6, message: "At least 6 characters"}]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item className="ms-[270px]">
                <Button type="primary" color="default" variant="solid" htmlType="submit">
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    </div>
};

export default SignupPage;
