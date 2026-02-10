import { Request, Response } from "express";
import { OrderModel } from "../../schema/order.schema";

export const getOrderByIdGet = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params; 

        const orders = await OrderModel.find({ user: userId } as any)
            .populate("foods.food")
            .populate("user", "name email");

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "Userd zahialga oldsongui" });
        }

        res.status(200).json({
            message: "Hereglegchiin zahialguud",
            data: orders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Zahialga avahad aldaa garlaa" });
    }
};