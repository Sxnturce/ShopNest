import { Router } from "express";
import { Products } from "../controllers/ProductsController.js";
const router = Router()

router.get("/", Products.getProducts)

router.get("/product/:id", Products.getProduct)
router.post("/comment", Products.createComment)

export default router