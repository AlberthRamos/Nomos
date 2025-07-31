import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
    constructor(private authService: AuthService) {}

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            // Basic validation
            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required.' });
            }
            const newUser = await this.authService.register({ email, password_hash: password });
            res.status(201).json(newUser);
        } catch (error) {
            // Handle potential unique constraint violation for email
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ message: 'Email already exists.' });
            }
            next(error);
        }
    };

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required.' });
            }
            const token = await this.authService.login(email, password);

            if (!token) {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }

            res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    };
}
