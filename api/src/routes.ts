import { Router } from 'express';

export const router = Router();

//Create categories
router.post('/categories', (req, res) => {
  res.send('ok');
});

//List categories
router.get('/categories', (req, res) => {
  res.send('OK');
});

//Create products
router.get('./products', (req, res) => {
  res.send('ok');
});

//List products
router.post('./products', (req, res) => {
  res.send('ok');
});

//Get products by category
router.get('./categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

//Get orders
router.get('./orders', (req, res) => {
  res.send('ok');
});

//Create orders
router.post('./orders', (req, res) => {
  res.send('ok');
});

//Update order status
router.patch('./orders/:orderId', (req, res) => {
  res.send('ok');
});

//Delete order
router.delete('./orders/:orderId', (req, res) => {
  res.send('ok');
});

