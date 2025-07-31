import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { authMiddleware } from '../middlewares/auth.middleware';
import { checkRole } from '../middlewares/authorization.middleware';

const router = Router();
const productService = new ProductService();
const productController = new ProductController(productService);

// All product routes will be protected by the authentication middleware
router.use(authMiddleware);

// CRUD routes
router.post('/', checkRole(['owner', 'admin']), productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.put('/:id', checkRole(['owner', 'admin']), productController.update);
router.delete('/:id', checkRole(['owner', 'admin']), productController.remove);

export default router;
