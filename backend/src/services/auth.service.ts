import { AppDataSource } from '../config/data-source';
import { User } from '../entities/User';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async register(userData: Partial<User>): Promise<Omit<User, 'password_hash'>> {
        const { email, password_hash } = userData;
        if (!email || !password_hash) {
            throw new Error('Email and password are required');
        }

        const hashedPassword = await bcrypt.hash(password_hash, 10);
        const newUser = this.userRepository.create({ ...userData, password_hash: hashedPassword });

        const savedUser = await this.userRepository.save(newUser);
        const { password_hash: _, ...userWithoutPassword } = savedUser;
        return userWithoutPassword;
    }

    async login(email: string, pass: string): Promise<string | null> {
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            return null;
        }

        const isMatch = await bcrypt.compare(pass, user.password_hash);
        if (!isMatch) {
            return null;
        }

        const payload = { id: user.id, role: user.role, plan: user.plan };
        const secret = process.env.JWT_SECRET || 'a_very_secret_key';
        const token = jwt.sign(payload, secret, { expiresIn: '1d' });

        return token;
    }
}
