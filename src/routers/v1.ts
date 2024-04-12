import express from "express";
import getAllProducts from "../controllers/v1/getAllProducts";
import openAiTextGen from "../controllers/v1/openAiTextGen";

const v1router = express.Router();

// routes
v1router.get("/products", getAllProducts);
v1router.post("/assistant", openAiTextGen);

export default v1router;
