import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    connectDB(); // Connect to MongoDB
});
