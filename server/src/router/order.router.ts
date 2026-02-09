import { Request, Response, Router } from "express";
import { createOrder } from "../controller";
import { foodOrderUpdate } from "../controller";
import { getFoodOrder } from "../controller";

export const orderRouter = Router();

orderRouter.post("/create-order", createOrder)

orderRouter.post("/food-order-update/:foodId", foodOrderUpdate)
orderRouter.get("/food-order-update/:userId", foodOrderUpdate)


orderRouter.get("/get-order", getFoodOrder)