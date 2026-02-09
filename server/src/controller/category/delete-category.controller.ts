import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models/food.category.model";

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        // const category = await FoodCategoryModel.findOne({ _id: id });

        // if (!category) {
        //     return res.status(404).json({ message: "Категори олдсонгүй" });
        // }

        // category.isDeleted = true;
        
        // await category.save();

        res.status(200).json({ message: "Амжилттай устгагдлаа" });
    } catch (error: any) {
        res.status(500).json({ message: "Алдаа гарлаа", error: error.message });
    }
};