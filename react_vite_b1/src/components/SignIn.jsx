import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (formData) => {
		try {
			reset();
			const response = await axios.post(`${import.meta.env.VITE_API_URL}/signin`, formData);
            localStorage.setItem("token", response.data.accessToken);
			alert("Đăng nhập thành công");
			navigate("/products");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container w-25 mt-5">
			<h1>Đăng nhập</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						{...register("email", {
							required: "Bắt buộc nhập",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Email không đúng định dạng",
							},
						})}
					/>
					{errors.email && <p className="text-danger">{errors.email.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Mật khẩu
					</label>
					<input
						type="password"
						className="form-control"
						{...register("password", {
							required: "Bắt buộc nhập"
						})}
					/>
					{errors.password && <p className="text-danger">{errors.password.message}</p>}
				</div>
				<button className="btn btn-primary" type="submit">
					Đăng nhập
				</button>
			</form>
		</div>
	);
};

export default SignIn;
