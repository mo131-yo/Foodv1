import { Router } from "express";
import { createFoodItem } from "../controller/foods/create-new-food.controller";
import { deleteFood } from "../controller/foods/delete-food.controller";
import { updateFood } from "../controller/foods/update-food.controller";
import { authentication, authorization } from "../middlewares";
import { getFoodByIdGet } from "../controller/foods/get-food-by-id.controller";
import { getAllFood } from "../controller/foods/get-all-food.controller";

export const foodRouter = Router();

foodRouter.post("/create-food-item", authorization , authentication ,createFoodItem);

foodRouter.delete("/delete-food/:foodId", deleteFood)
foodRouter.patch("/update-food/:foodId", updateFood)

foodRouter.get("/get-food-by-id/:foodId", getFoodByIdGet)
foodRouter.get("/get-all-food", getAllFood)