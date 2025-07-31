import { AppDataSource } from '../config/data-source';
import { Product } from '../entities/Product';
import { User } from '../entities/User';
import { Repository, FindManyOptions, ILike } from 'typeorm';

export class ProductService {
    private productRepository: Repository<Product>;
    private userRepository: Repository<User>;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product);
        this.userRepository = AppDataSource.getRepository(User);
    }

    // CREATE
    async create(productData: Partial<Product>, userId: string): Promise<Product> {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new Error('User not found');
        }
        const newProduct = this.productRepository.create({ ...productData, user });
        return this.productRepository.save(newProduct);
    }

    // READ (List for a specific user)
    async findByUser(userId: string, queryParams: any): Promise<[Product[], number]> {
        const { page = 1, limit = 10, search } = queryParams;
        const options: FindManyOptions<Product> = {
            where: { user: { id: userId } },
            take: limit,
            skip: (page - 1) * limit,
        };

        if (search) {
            options.where = { ...options.where, nome: ILike(`%${search}%`) };
        }

        return this.productRepository.findAndCount(options);
    }

    // READ (Single)
    async findOne(id: string, userId: string): Promise<Product | null> {
        return this.productRepository.findOne({ where: { id, user: { id: userId } } });
    }

    // UPDATE
    async update(id: string, productData: Partial<Product>, userId: string): Promise<Product | null> {
        const product = await this.findOne(id, userId);
        if (!product) {
            return null;
        }
        Object.assign(product, productData);
        return this.productRepository.save(product);
    }

    // DELETE
    async remove(id: string, userId: string): Promise<boolean> {
        const product = await this.findOne(id, userId);
        if (!product) {
            return false;
        }
        await this.productRepository.remove(product);
        return true;
    }

    // Count products for a user
    async countByUser(userId: string): Promise<number> {
        return this.productRepository.count({ where: { user: { id: userId } } });
    }
}
