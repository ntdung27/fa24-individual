import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

const App = () => {
	// *Call API lấy ra danh sách sản phẩm
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	// *Hàm xóa sản phẩm
	const removeItem = async (id) => {
		const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
		if (confirm) {
			await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
			setProducts(products.filter((item) => item.id !== id));
		}
	};

	// *Hàm thêm sản phẩm
	const addItem = async (product) => {
		try {
			const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, product);
			alert("Thêm sản phẩm thành công");
			setProducts([...products, response.data]);
		} catch (error) {
			console.log(error);
		}
	};

	// *Hàm sửa 1 sản phẩm theo ID
	const editItem = async (product) => {
		try {
			const response = await axios.put(`${import.meta.env.VITE_API_URL}/products/${product.id}`, product);
			alert("Cập nhật sản phẩm thành công");
			// rerender
			const newProducts = products.map((item) => 
				item.id === response.data.id ? response.data : item
			);
			setProducts(newProducts);
		} catch (error) {
			console.log(error);
		}
	};

	// -------return-------
	return (
		<div>
			<Routes>
				<Route path="/" element={<h1>Home page</h1>} />
				<Route path="/products" element={<ProductList products={products} removeItem={removeItem} />} />
				<Route path="/products/add" element={<ProductAdd addItem={addItem} />} />
				<Route path="/products/edit/:id" element={<ProductEdit editItem={editItem} />} />
			</Routes>
		</div>
	);
};

export default App;
