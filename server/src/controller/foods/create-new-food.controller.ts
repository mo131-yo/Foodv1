
import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const createFoodItem = async (req: Request, res: Response) => {
    try {
        const { foodName, foodPrice, foodImage, quantity, categoryId } = req.body;

        const newFood = await FoodModel.create({name:foodName,price: foodPrice, image:foodImage, quantity:quantity, category: categoryId});

        res.status(201).json({message: "Khool amjilttai burtgegdlee",data: newFood});
    } catch (error: any) {
        res.status(500).json({ message: "Aldaa garlaa", error: error.message });
    }
};
