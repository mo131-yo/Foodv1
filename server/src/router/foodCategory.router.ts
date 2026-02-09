import {Router} from "express";
import { createFoodCategory, getAllFoodCategory, getFoodCategoryById } from "../controller/category";
import { updateCategory } from "../controller/category/update-category.controller";
import { deleteCategory } from "../controller/category/delete-category.controller";

export const foodCategoryRouter = Router();

foodCategoryRouter.post("/create-food-category", createFoodCategory);

foodCategoryRouter.get("/get-category/:id",  getFoodCategoryById);
foodCategoryRouter.get("/get-all-foods/:id",  getAllFoodCategory);

foodCategoryRouter.patch("/update-category/:id", updateCategory);
foodCategoryRouter.delete("/delete-category/:id", deleteCategory)
    

    