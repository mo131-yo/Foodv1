 import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
import mongoose from "mongoose";
import { CardModel } from "../../models";

export const deleteFoodCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (typeof id !== 'string') {
      return res.status(400).json({
        success: false,
        message: "Id buruu baina",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Huchingui id",
      });
    }

    const deletedFooCard = await (CardModel as any).findByIdAndDelete(id);

    if (!deletedFooCard) {
      return res.status(404).json({
        success: false,
        message: "KHool bhq",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Amjilttai ustgagdlaa",
      data: deletedFooCard,
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