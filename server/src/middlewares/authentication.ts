import { NextFunction, Request, Response } from "express";

export const authentication = async (req: Request, res: Response, next: NextFunction)=>{
    const authToken= req.headers.authentication;
};