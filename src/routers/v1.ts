import express from "express";
import getAllProducts from "../controllers/v1/getAllProducts";

const v1router = express.Router();

// routes
v1router.get("/products", getAllProducts);

export default v1router;
