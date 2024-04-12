import { NextFunction, Request, Response } from "express";
import Shopify from "shopify-api-node";
import dotenv from "dotenv";
dotenv.config();

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME!,
  apiKey: process.env.SHOPIFY_API_KEY!,
  password: process.env.SHOPIFY_PASSWORD!,
});

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { limit = 5 } = req.query;
    const data = await shopify.product.list({
      limit: Number(limit),
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default getAllProducts;
