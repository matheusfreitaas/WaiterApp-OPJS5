import { json, Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, category, ingredients, price } = req.body;
    const product = await Product.create({
      name,
      description,
      category,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.send().status(500);
  }
}
