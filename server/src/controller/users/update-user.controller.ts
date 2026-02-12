import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema"; 

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;

        delete updateData.password;
        delete updateData._id;

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User oldsongui" });
        }

        res.status(200).json({
            message: "Update successfull",
            user: updatedUser
        });

    } catch (error: any) {
        console.error("Update Error:", error.message);
        res.status(500).json({ message: "Aldaa garlaa", error: error.message });
    }
};