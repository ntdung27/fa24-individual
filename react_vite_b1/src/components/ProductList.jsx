/* eslint-disable react/prop-types */
// import React from "react";

import { Link } from "react-router-dom";

const ProductList = ({ products, removeItem }) => {
	return (
		<div>
			<h1 className="text-center m-5">Danh sách sản phẩm</h1>
			<div className="container">
            <button className="btn btn-success">
				<Link to="/products/add" className="text-light">Thêm sản phẩm mới</Link>
			</button>
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
									<button className="btn btn-danger" onClick={() => removeItem(item.id)}>
										Xóa
									</button>
									<button className="btn btn-success">
										<Link to={`/products/edit/${item.id}`} className="text-light">
											Cập nhật
										</Link>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductList;
