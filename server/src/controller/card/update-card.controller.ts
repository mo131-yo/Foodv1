import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
import mongoose from "mongoose";
import { CardModel } from "../../models";

export const updateFoodCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body; 

    if (typeof id !== 'string' || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Huchingui id bn",
      });
    }

    const updatedFoodCard = await (CardModel as any).findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true } 
    );

    if (!updatedFoodCard) {
      return res.status(404).json({
        success: false,
        message: "Khool oldsongui",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Succes",
      data: updatedFoodCard,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Aldaa garlaa",
      error: error.message,
    });
  }
};