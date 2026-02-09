// import {Router} from "express";
// import { createFoodItem, getFoodItems , getNewFood} from "../controller/foods";

// export const foodRouter = Router();

// foodRouter.post("/create-food-item", createFoodItem);
// foodRouter.get("/all", getFoodItems);
// foodRouter.get("/recent", getNewFood);


import { Router } from "express";
import { createFoodItem } from "../controller/foods/create-new-food.controller";
import { deleteFood } from "../controller/foods/delete-food.controller";
import { updateFood } from "../controller/foods/update-food.controller";
import { authentication, authorization } from "../middlewares";
import { getFoodByIdGet } from "../controller/foods/get-food.controller";
import { getAllFood } from "../controller/foods/get-all-food.controller";
import { UserRole } from "../schema/user.schema";

export const foodRouter = Router();

foodRouter.post("/create-food-item", authorization , authentication ,createFoodItem);

foodRouter.delete("/delete-food/:id", deleteFood)
foodRouter.post("/update-food/:id", updateFood)

foodRouter.get("/get-food-by-id", getFoodByIdGet)
foodRouter.get("/get-all-food", getAllFood)