import { models, model, Schema, Model } from "mongoose";

type Card = {
  title: string;
  price: number;
  product: string;
  foodImage: string;
  description: string;
};

const CardSchema = new Schema<Card>(
  {
    title: { type: String, required: true },
    product: [{ type: String, required: true }],
    price: { type: Number, required: true },
    foodImage: { type: String},
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const CardModel: Model<Card> =models["Cards"] || model("Cards", CardSchema);
