import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { deleteOrder } from './app/useCases/orders/deleteOrder';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { deleteProduct } from './app/useCases/products/deleteProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

//  ---- Categories ----

//Create
router.post('/categories', createCategory);

//List
router.get('/categories', listCategories);

//Delete
router.delete('/categories/:categoryId', deleteCategory);

//List category products
router.get('/categories/:categoryId/products', listProductsByCategory);

//  ---- Products ----

//List
router.get('/products', listProducts);

//Create
router.post('/products', upload.single('image'), createProduct);

//Delete
router.delete('/products/:productId', deleteProduct);

//  ---- Orders ----

//List
router.get('/orders', listOrders);

//Create
router.post('/orders', createOrder);

//Update status
router.patch('/orders/:orderId', changeOrderStatus);

//Delete
router.delete('/orders/:orderId', deleteOrder);

