// import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductEdit = ({ editItem }) => {
	const { id } = useParams();
	const { register, handleSubmit, reset, formState: {errors} } = useForm();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
				reset(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [id, reset]);

	const onSubmit = (formData) => {
		try {
			navigate("/products");
			editItem(formData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container w-50 mt-5">
			<h1>Cập nhật sản phẩm</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Tên sản phẩm
					</label>
					<input type="text" className="form-control" {...register("name", {required: "Bắt buộc nhập"})} />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label">
						Giá sản phẩm
					</label>
					<input type="number" className="form-control" {...register("price", {required: "Bắt buộc nhập", min: {value: 0, message:"Nhập giá không âm"}})} />
                    {errors.price && <p className="text-danger">{errors.price.message}</p>}
				</div>
				<button className="btn btn-primary" type="submit">
					Cập nhật
				</button>
			</form>
		</div>
	);
};

export default ProductEdit;
