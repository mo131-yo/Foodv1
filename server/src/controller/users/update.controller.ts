import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
import mongoose from "mongoose";
import { UserModel } from "../../models";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body; 

    if (typeof id !== 'string' || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Id huchingui",
      });
    }

    const updateUser = await (UserModel as any).findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true } 
    );

    if (!updateUser) { 
      return res.status(404).json({
        success: false,
        message: "User olsongui",
      });
    }

    return res.status(200).json({
      success: true,
      message: "update success",
      data: updateUser,
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
