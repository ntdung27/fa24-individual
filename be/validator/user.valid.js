import Joi from "joi";

export const registerValidate = Joi.object({
    username: Joi.string().required().min(6).message({
        "string.empty": "Username không được để trống",
        "any.required": "Username là bắt buộc",
        "string.base": "Username cần có kiểu dữ liệu chuỗi",
        "string.min": "Username cần tối thiểu 6 kí tự"
    }),
    email: Joi.string().required().email().message({
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
        "string.base": "Email cần có kiểu dữ liệu chuỗi",
        "string.email": "Email sai định dạng"
    }),
    password: Joi.string().required().min(6).message({
        "string.empty": "Password không được để trống",
        "any.required": "Password là bắt buộc",
        "string.base": "Password cần có kiểu dữ liệu chuỗi",
        "string.min": "Password cần tối thiểu 6 kí tự"
    })
})

export const loginValidate = Joi.object({
    email: Joi.string().required().email().message({
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
        "string.base": "Email cần có kiểu dữ liệu chuỗi",
        "string.email": "Email sai định dạng"
    }),
    password: Joi.string().required().min(6).message({
        "string.empty": "Password không được để trống",
        "any.required": "Password là bắt buộc",
        "string.base": "Password cần có kiểu dữ liệu chuỗi",
        "string.min": "Password cần tối thiểu 6 kí tự"
    })
})