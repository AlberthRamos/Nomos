import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/data-source';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';

dotenv.config();

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');

        const app = express();
        const PORT = process.env.PORT || 3000;

        app.use(cors());
        app.use(express.json());

        // --- API Routes ---
        app.use('/api/auth', authRoutes);
        app.use('/api/products', productRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error during app initialization:', err);
    }
};

main();
