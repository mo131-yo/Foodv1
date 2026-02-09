import { Request, Response } from "express";
import { OrderModel } from "../../schema/order.schema";

export const foodOrderUpdate = async (req: Request, res: Response) => {
    try {
        const { orderId, status } = req.body;

        // const updatedOrder = await OrderModel.findByIdAndUpdate(orderId,
        //     { status: status },
        //     { new: true }
        // );

        // res.status(200).json({ message: "tuluv uurchlugdluu", data: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: "Aldaa garlaa" });
    }
};