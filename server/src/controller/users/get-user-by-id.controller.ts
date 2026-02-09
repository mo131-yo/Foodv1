import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema";

export const getUserByIdAndGet = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params; 
        const user = await UserModel.findById(userId); 

        if (!user) {
            return res.status(404).json({ message: "User olsongui" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
}