import { Request, Response } from "express";
import { FoodModel } from "../../schema/food.schema";
import { OrderModel } from "../../models";

export const getAllOrder = async (req: Request, res: Response) => {
    try {
        const order = await OrderModel.find();
        
        res.status(200).json({
            message: "Buh Khool",
            count: order.length,
            data: order
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Alda garlaa" });
    }
};