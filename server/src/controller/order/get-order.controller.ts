import { OrderModel } from "../../schema/order.schema";
import { Request, Response } from "express";

export const getFoodOrder = async (req: any, res: Response) => {
    try {
        const userId = req.user._id;

        // const orders = await OrderModel.find({ user: userId }).populate("foods.food").sort({ createdAt: -1 });

        res.status(200).json();
    } catch (error) {
        res.status(500).json({ message: "Aldaa garlaa" });
    }
};