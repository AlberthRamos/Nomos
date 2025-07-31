import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// This is a common pattern to extend the Express Request type.
// It allows us to attach the decoded user payload to the request object
// without TypeScript complaining.
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: string;
                plan: string;
            };
        }
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acesso não autorizado. Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'a_very_secret_key';

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded as Express.Request['user'];
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido ou expirado.' });
    }
};
