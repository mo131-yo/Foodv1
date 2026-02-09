import { Request, Response } from "express";
import { FoodModel } from "../../schema/food.schema";

export const getAllFood = async (req: Request, res: Response) => {
    try {
        const food = await FoodModel.find();
        
        res.status(200).json({
            message: "Buh Khool",
            count: food.length,
            data: food
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Alda garlaa" });
    }
};