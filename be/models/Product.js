import mongoose from "mongoose";

// TODO: Khởi tạo Schema
const Schema = mongoose.Schema;

// TODO: Khai báo trường dữ liệu ở trong bảng
const ProductSchema = new Schema(
	{
		name: { type: String, require: true },
		price: { type: Number, require: true },
		description: { type: String, require: true },
		images: { type: [String], require: true },
        inStock: { type: Boolean, require: true },
        category: { type: String, require: true }
	},
	{
		// ?thêm created_at, updated_at cho bản ghi
		timestamps: true,
	}
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
