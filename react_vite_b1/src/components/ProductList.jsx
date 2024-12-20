/* eslint-disable react/prop-types */
// import React from "react";

import { Link } from "react-router-dom";

const ProductList = ({ products, removeItem }) => {
	const token = localStorage.getItem("token");
	return (
		<div>
			<h1 className="text-center m-5">Danh sách sản phẩm</h1>
			<div className="container">
				<Link to="/products/add" className="text-light">
					<button className="btn btn-success">Thêm sản phẩm mới</button>
				</Link>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Tên sản phẩm</th>
							<th>Giá sản phẩm</th>
							<th>Hành động</th>
						</tr>
					</thead>
					<tbody>
						{products.map((item, index) => (
							<tr key={item.id}>
								<td>{index + 1}</td>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>
									<button className="btn btn-danger me-2" onClick={() => removeItem(item.id)}>
										Xóa
									</button>
									<Link to={`/products/edit/${item.id}`}>
										<button className="btn btn-success">Cập nhật</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{!token ? (
					<>
						<Link to={`/signup`}>
							<button className="btn btn-dark me-2">Đăng kí</button>
						</Link>
						<Link to={`/signin`}>
							<button className="btn btn-dark">Đăng nhập</button>
						</Link>
					</>
				) : (
					"Bạn đã đăng nhập"
				)}
			</div>
		</div>
	);
};

export default ProductList;
