import mongoose, {models, Schema} from "mongoose";  

    const FoodOrderItem = new Schema(
        {
            foodId: { type: Schema.ObjectId, ref: "Food", required: true},
            quantity: { type: Number, required: true },
        },
        {_id: false},
    );
  export const FoodCardSchema = new Schema({
        user: [{ type: String, required: true, ref: "User"}],
        foodOrderItems: [FoodOrderItem],
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true},
        foodName: { type: String, required: true},
        foodPrice: { type: String, required: true},
        foodImage: { type: String },
        quantity: { type: Number, default: 1},
    },
    {timestamps: true}
);

    export const FoodCardModel = models["FoodCard"] || mongoose.model("FoodCard", FoodCardSchema);