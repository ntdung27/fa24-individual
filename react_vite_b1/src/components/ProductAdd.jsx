// import axios from "axios";
// import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductAdd = ( { addItem } ) => {
    const { register, handleSubmit, reset } = useForm();
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
        <div className="container mt-5">
            <h1>Thêm mới sản phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Tên sản phẩm
                    </label>
                    <input type="text" className="form-control" {...register("name")} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Giá sản phẩm
                    </label>
                    <input type="number" className="form-control" {...register("price")} />
                </div>
                <button className="btn btn-primary" type="submit">
                    Thêm
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;