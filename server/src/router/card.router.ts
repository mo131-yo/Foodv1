import {createFoodCard, getNewFoodCard, getFoodCardItems } from "../controller/card/index";
import express from "express";
import { updateFoodCard } from "../controller/card/update-card.controller";
import { deleteFoodCard } from "../controller/card/delete-card.controller";

export const foodCardRouter = express.Router();

foodCardRouter.post("/add-to-card", createFoodCard);

foodCardRouter.get("/get-food-card-items", getFoodCardItems);
foodCardRouter.get("/get-new-food-card", getNewFoodCard);

 foodCardRouter.post("/update-food-card/:id", updateFoodCard); 
 foodCardRouter.delete("/delete-food-card", deleteFoodCard)