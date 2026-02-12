import { Request, Response, NextFunction } from "express";

export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user; 

    if (!user) {
      return res.status(401).json({ message: "Нэвтрээгүй байна" });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ 
        message: "Танд энэ үйлдлийг хийх эрх байхгүй (Зөвхөн Админ)." 
      });
    }

    next();
  };
};