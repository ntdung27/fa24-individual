// import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductAdd = ( { addItem } ) => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        try {
            reset();
            navigate("/products");
            addItem(formData);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="container w-50 mt-5">
            <h1>Thêm mới sản phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Tên sản phẩm
                    </label>
                    <input type="text" id="name" className="form-control" {...register("name", {required: "Bắt buộc nhập"})} />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Giá sản phẩm
                    </label>
                    <input type="number" id="price" className="form-control" {...register("price", {required: "Bắt buộc nhập", min: {value: 0, message:"Nhập giá không âm"}})} />
                    {errors.price && <p className="text-danger">{errors.price.message}</p>}
                </div>
                <button className="btn btn-primary" type="submit">
                    Thêm
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;