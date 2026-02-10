import { Request, Response } from "express";
import { FoodModel } from "../../schema/food.schema";
import { OrderModel } from "../../models";

export const getAllOrder = async (req: Request, res: Response) => {
    try {
        const order = await OrderModel.find()
            .populate("user", "name email")
            .populate("foods.food");

        res.status(200).json({
            message: "Buh zahialguud",
            count: order.length,
            data: order
        });
    } catch (error) {
        console.error("GetAllOrder Error:", error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
};