import { Request, Response, NextFunction } from "express";

export const adminMiddleware = (req: any, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({ message: "Ta admin bish bn" });
  }
};