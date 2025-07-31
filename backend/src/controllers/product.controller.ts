import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
    constructor(private productService: ProductService) {}

    // POST /api/products
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id;
            if (!userId) return res.status(401).json({ message: 'Unauthorized' });

            const newProduct = await this.productService.create(req.body, userId);
            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    };

    // GET /api/products
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id;
            if (!userId) return res.status(401).json({ message: 'Unauthorized' });

            const [products, total] = await this.productService.findByUser(userId, req.query);
            res.status(200).json({
                data: products,
                total,
                page: parseInt(req.query.page as string) || 1,
                limit: parseInt(req.query.limit as string) || 10,
            });
        } catch (error) {
            next(error);
        }
    };

    // GET /api/products/:id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id;
            if (!userId) return res.status(401).json({ message: 'Unauthorized' });

            const product = await this.productService.findOne(req.params.id, userId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    };

    // PUT /api/products/:id
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id;
            if (!userId) return res.status(401).json({ message: 'Unauthorized' });

            const updatedProduct = await this.productService.update(req.params.id, req.body, userId);
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            next(error);
        }
    };

    // DELETE /api/products/:id
    remove = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id;
            if (!userId) return res.status(401).json({ message: 'Unauthorized' });

            const success = await this.productService.remove(req.params.id, userId);
            if (!success) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(204).send(); // No Content
        } catch (error) {
            next(error);
        }
    };
}
