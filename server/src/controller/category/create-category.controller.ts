import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models/food.category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
    try {
        const { categoryName, description } = req.body;

        // 1. Ийм нэртэй категори аль хэдийн байгаа эсэхийг шалгах
        const existingCategory = await FoodCategoryModel.findOne( categoryName );
        if (existingCategory) {
            return res.status(400).json({ message: "Энэ категори аль хэдийн бүртгэгдсэн байна." });
        }

        // 2. Шинэ категори үүсгэх
        const newCategory = await FoodCategoryModel.create({ 
            categoryName, 
            description 
        });

        res.status(201).json({ 
            message: "Category amjilttai nemegdlee", 
            data: newCategory 
        });

    } catch (error: any) {
        console.error("ALDAA:", error.message);
        res.status(500).json({ 
            message: "Aldaa garlaa", 
            error: error.message 
        });
    }
}