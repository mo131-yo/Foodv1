import { NextFunction, Request, Response } from "express";

export const authorization = async (req: Request, res: Response, next: NextFunction)=>{
    const authToken= req.headers.authorization;
};