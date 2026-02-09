import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema";

export const getFoodByIdGet = async (req: Request, res: Response) => {
    try {
        const { foodId } = req.params; 
        const food = await UserModel.findById(foodId); 

        if (!food) {
            return res.status(404).json({ message: "Khool olsongui" });
        }

        res.status(200).json(food);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
}