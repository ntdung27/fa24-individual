import { Router } from "express";
import productRouter from "./products.js";
import apiRouter from "./api.js";

const router = Router();

router.use("/", productRouter); //Router cho products (views)
router.use("/api", apiRouter); //Router cho RESTful api

export default router;