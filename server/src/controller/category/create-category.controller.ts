
import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models/food.category.model";


export const createFoodCategory = async (req: Request, res: Response) => {
    try {
        const { categoryName, description } = req.body;

        const newFood = await FoodCategoryModel.create({ categoryName, description });

        res.status(201).json({ 
            message: "Category amjilttai nemegdlee", 
            data: newFood 
        });
    } catch (error: any) {
        console.error("ALDAA:", error.message);
        res.status(500).json({ message: "Aldaa garlaa", error: error.message
        });
    }
}
