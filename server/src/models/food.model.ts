// import { models, model, Schema, Model , ObjectId} from "mongoose";

// type Food = {
//   _id: ObjectId;
//   foodName: string;
//   price: string;
//   image: string;
// };

// const FoodSchema = new Schema<Food>(
//   {
//     _id: { type: Schema.Types.ObjectId },
//     foodName: { type: String, required: true },
//     price: { type: String, required: true },
//     image: { type: String},
//   },
//   { timestamps: true },
// );


// export const FoodModel: Model<Food> =models["Foods"] || model("Foods", FoodSchema);


import { ObjectId } from "mongodb";
import mongoose, { models, Schema } from "mongoose";


type Food = {
  _id: String;
  foodName: string;
  foodPrice: number;
  foodImage: string;
  quantity: number;
  category: mongoose.Types.ObjectId;
  ingredients: String;
};

export const FoodSchema = new Schema({
    foodName: { type: String, required: true },
    foodPrice: { type: Number, required: true },
    foodImage: { type: String },
    quantity: { type: Number, default: 1 },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    ingredients: {type: String }
}, { timestamps: true });

export const FoodModel = models["Food"] || mongoose.model("Food", FoodSchema);