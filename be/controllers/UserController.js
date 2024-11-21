import User from "../models/User.js";
import { loginValidate, registerValidate } from "../validator/user.valid.js";
import bcryptjs from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";

class UserController {
	// Đăng kí: 1. Validate, 2. Kiểm tra Email đã tồn tại chưa, 3. Mã hóa mật khẩu, 4. Lưu DB

	async register(req, res) {
		try {
			// validate
			const { error } = registerValidate.validate(req.body, { abortEarly: false });
			if (error) {
				const messageError = error.details.map((item) => item.message);
				return res.status(400).json({ messageError });
			}
			// Existed Email
			const existedUser = await User.findOne({ email: req.body.email });
			if (existedUser) {
				return res.status(400).json({ message: "Email đã tồn tại" });
			}
			// encode password
			const hashPassword = await bcryptjs.hash(req.body.password, 10);
			// save DB
			const newUser = await User.create({
				...req.body,
				password: hashPassword,
			});
			newUser.password = undefined;

			return res.status(201).json({
				message: "Đăng kí thành công",
				data: newUser,
			});
		} catch (error) {
			res.status(500).json({ message: error });
		}
	}

	// Đăng nhập

	async signin(req, res) {
		try {
			// validate
			const { error } = loginValidate.validate(req.body, { abortEarly: false });
			if (error) {
				const messageError = error.details.map((item) => item.message);
				return res.status(400).json({ messageError });
			}
			// Existed Email
			const existedUser = await User.findOne({ email: req.body.email });
			if (!existedUser) {
				return res.status(400).json({ message: "Không tìm thấy tài khoản" });
			}
			// Check password
			const isMatch = await bcryptjs.compare(req.body.password, existedUser.password);
			if (!isMatch) {
				return res.status(400).json({ message: "Nhập sai mật khẩu" });
			}
			// Tạo token
			const token = jwt.sign(
				{ id: existedUser.id, email: existedUser.email, username: existedUser.username },
				process.env.KEY_SECRET,
				{ expiresIn: "10m" }
			);
			//
			return res.status(201).json({
				message: "Đăng nhập thành công",
				user: { id: existedUser.id, username: existedUser.username, email: existedUser.email },
				token,
			});
		} catch (error) {
			res.status(500).json({ message: error });
		}
	}
}

export default UserController;
