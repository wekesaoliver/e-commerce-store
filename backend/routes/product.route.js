import express from "express";
import {
    getAllProducts,
    getFeaturedProducts,
    createProduct,
    deleteProduct,
    getRecommendedProduct,
    getProductByCategory,
    toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);

router.get("/featured", getFeaturedProducts);

router.get("/category/:category", getProductByCategory);

router.get("/recommendations", getRecommendedProduct);

router.post("/", protectRoute, adminRoute, createProduct);

router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

router.post("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
