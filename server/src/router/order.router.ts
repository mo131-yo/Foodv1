import { Request, Response, Router } from "express";
import { createOrder } from "../controller";
import { getAllOrder } from "../controller";
import { getOrderByIdGet } from "../controller/order/getBy-id-order.controller";
import { manyOrderUpdate } from "../controller/order/many-order-update.controller";
import { authMiddleware } from "../middlewares";
import { UserRole } from "../schema/user.schema";
import { roleMiddleware } from "../middlewares/rolMiddleware";

export const orderRouter = Router();

orderRouter.post("/create-order",authMiddleware, createOrder)

orderRouter.get("/all-order", authMiddleware, getAllOrder);

orderRouter.get("/get-by-id-order/:userId",authMiddleware , getOrderByIdGet);

orderRouter.patch("/many-order-update", authMiddleware, roleMiddleware([UserRole.ADMIN]), manyOrderUpdate);