import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../entities/User';

export const checkRole = (roles: Array<UserRole>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // This middleware must run after the authMiddleware,
    // so we can expect req.user to be present.
    if (!req.user) {
      return res.status(401).json({ message: 'Acesso não autorizado.' });
    }

    const { role } = req.user;

    if (roles.includes(role as UserRole)) {
      next(); // Role is allowed, proceed to the next middleware/controller
    } else {
      res.status(403).json({ message: 'Acesso proibido. Você não tem permissão para este recurso.' });
    }
  };
};
