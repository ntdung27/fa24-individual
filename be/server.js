// TODO: express dùng để khởi tạo node server
import express from "express";
import mongoose from "mongoose";
import router from "./routers/index.js";
import cors from "cors";
import "dotenv/config";

// TODO: khởi tạo express
const app = new express();

// TODO: khai báo cổng chạy node server
const port = 3000;
app.use(express.json());
app.use(cors())

// TODO: Cấu hình ejs
app.set("engine", "ejs"); //Khai báo template engine
app.set("views", "./views"); //Khai báo đến đường dẫn thư mục chứa giao diện

// TODO: Cấu hình middleware
app.use(
	express.urlencoded({
		extended: true,
	})
);

// TODO: Kết nối MongoDB
mongoose
	.connect("mongodb://localhost:27017/WD19201_RESTfulWS")
	.then((result) => {
		// TODO: Từ server.js sẽ chạy sang index.js trong router
		app.use("/", router);

		// TODO: Báo cổng
		app.listen(port, () => {
			console.log(`Server đang chạy ở port ${port}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
