import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
			await axios.post(`${import.meta.env.VITE_API_URL}/signup`, formData);
			alert("Đăng kí thành công");
			navigate("/signin");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container w-25 mt-5">
			<h1>Đăng kí tài khoản</h1>
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
							required: "Bắt buộc nhập",
							minLength: { value: 6, message: "Nhập ít nhất 6 kí tự" },
						})}
					/>
					{errors.password && <p className="text-danger">{errors.password.message}</p>}
				</div>
				<button className="btn btn-primary" type="submit">
					Đăng kí
				</button>
			</form>
		</div>
	);
};

export default SignUp;
