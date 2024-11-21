import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";
import { auth } from "../middleware/auth.js";
const apiRouter = Router();
const proController = new ProductController();
const userController = new UserController();

// khai báo router
// apiRouter.method(url, nameController.function)
// TODO: url products
apiRouter.get("/products", auth, proController.apiList);
apiRouter.get("/products/:id", auth, proController.apiDetail);
apiRouter.post("/products", auth, proController.apiCreate);
apiRouter.put("/products/:id", auth, proController.apiUpdate);
apiRouter.delete("/products/:id", auth, proController.apiDelete);

// TODO: url users
apiRouter.post("/register", userController.register);
apiRouter.post("/signin", userController.signin);

export default apiRouter;
