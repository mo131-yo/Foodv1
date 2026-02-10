import {Router} from "express";
import { createFoodCategory, deleteCategory, getAllFoodCategory, getFoodCategoryById } from "../controller/category";
import { updateCategory } from "../controller/category/update-category.controller";

export const foodCategoryRouter = Router();

foodCategoryRouter.post("/create-food-category", createFoodCategory);

foodCategoryRouter.get("/get-category/:categoryId",  getFoodCategoryById);

foodCategoryRouter.get("/get-all-foods",  getAllFoodCategory);

foodCategoryRouter.patch("/update-category/:categoryId", updateCategory);

foodCategoryRouter.delete("/delete-category/:categoryId", deleteCategory)

