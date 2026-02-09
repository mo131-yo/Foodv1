import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema";

export const getFoodCategoryById = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params; 
        const foodCategory = await UserModel.findById(categoryId); 

        if (!foodCategory) {
            return res.status(404).json({ message: "Category oldsongui" });
        }

        res.status(200).json(foodCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Aldaa garlaa" });
    }
}