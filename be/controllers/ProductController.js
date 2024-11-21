import Product from "../models/product.js";

// TODO: Khởi tạo class ProductController
class ProductController {
	// TODO: Khởi tạo hàm lấy danh sách
	async getList(req, res) {
		// B1: Lấy dữ liệu từ DB bằng find()
		const products = await Product.find();
		console.log({ products });

		// B2: trả dữ liệu ra giao diện
		res.render("list.ejs", { products });
	}

	// TODO: Khởi tạo hàm lấy chi tiết
	async getDetail(req, res) {
		// B1: Lấy id bản ghi
		const id = req.params.id;
		// B2: truyền id lên để lấy thông tin chi tiết
		const product = await Product.findById(id);
		// B3: đổ dữ liệu ra giao diện
		res.render("detail.ejs", { product });
	}

	// TODO: Khởi tạo hàm xóa
	async delete(req, res) {
		// B1: lấy id bản ghi
		const id = req.params.id;
		// B2: truyền id để xóa
		await Product.findByIdAndDelete(id);
		// B3: Điều hướng về trang danh sách
		res.redirect("/list");
	}

	// TODO: Khởi tạo hàm hiển thị form tạo mới
	create(req, res) {
		res.render("create.ejs");
	}

	// TODO: Khởi tạo hàm lấy dữ liệu từ form tạo mới lưu vào Database
	async store(req, res) {
		// B1: Lấy dữ liệu người dùng nhập vào form req.body.inputName
		const newProduct = {
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: req.body.image,
		};
		// B2: Đẩy dữ liệu lên lưu vào db
		await Product.create(newProduct);
		res.redirect("/list");
	}

	// TODO: Khởi tạo hàm hiển thị form cập nhật
	async update(req, res) {
		const id = req.params.id;
		const product = await Product.findById(id);
		res.render("update.ejs", { product });
	}

	// TODO: Khởi tạo hàm lấy dữ liệu từ form cập nhật lưu vào Database
	async restore(req, res) {
		const id = req.params.id;
		const updateProduct = {
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: req.body.image,
		};
		await Product.findByIdAndUpdate(id, updateProduct);
		res.redirect("/list");
	}

	// ==============================================================================
	// TODO: API controller
	async apiList(req, res) {
		// truy vấn danh sách sản phẩm
		const products = await Product.find();
		res.status(200).json({
			message: "Lấy dữ liệu thành công",
			data: products,
		});
	}

	async apiDetail(req, res) {
		const id = req.params.id;
		const product = await Product.findById(id);
		res.status(200).json({
			message: "Lấy dữ liệu thành công",
			data: product,
		});
	}

	async apiCreate(req, res) {
		const newProduct = await Product.create(req.body);
		console.log(newProduct);

		res.status(200).json({
			message: "Tạo sản phẩm thành công",
			data: newProduct.toObject(),
		});
	}

	async apiUpdate(req, res) {
		const id = req.params.id;
		const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
		res.status(200).json({
			message: "Cập nhật sản phẩm thành công",
			data: updatedProduct.toObject(),
		});
	}

	async apiDelete(req, res) {
		const id = req.params.id;
		const deletedProduct = await Product.findByIdAndDelete(id);
		res.status(200).json({
			message: "Xóa sản phẩm thành công",
			data: deletedProduct,
		});
	}
}

export default ProductController;
