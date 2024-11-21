import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = Router();

// TODO: Khởi tạo đối tượng proController
const proController = new ProductController(); 

// TODO: Danh sách
productRouter.get("/list", proController.getList);

// TODO: Chi tiết
productRouter.get("/detail/:id", proController.getDetail);

// TODO: Xóa
productRouter.get("/delete/:id", proController.delete);

// TODO: Thêm mới
// trả về form nhập dữ liệu thêm mới
productRouter.get("/create", proController.create);
// lưu dữ liệu về db
productRouter.post("/store", proController.store);

// TODO: Cập nhật
productRouter.get("/update/:id", proController.update);
productRouter.post("/restore/:id", proController.restore);

export default productRouter;