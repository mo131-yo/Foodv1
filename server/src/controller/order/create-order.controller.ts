import { Request, Response } from "express";
import { OrderModel } from "../../schema/order.schema";

export const createOrder = async (req: any, res: Response) => {
    try {
        const { foods, totalPrice, address } = req.body;
        const userId = req.user._id;

        const newOrder = await OrderModel.create({
            user: userId,
            foods: foods,
            totalPrice: totalPrice,
            address: address,
            status: "Pending" 
        });

        res.status(201).json({
            message: "Amjilttai zahialgaa uusgegdlee",
            order: newOrder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
};