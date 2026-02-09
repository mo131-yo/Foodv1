
    // const FoodOrderItem = new Schema(
    //     {
    //         foodId: { type: Schema.ObjectId, ref: "Food", required: true},
    //         quantity: { type: Number, required: true },
    //     },
    //     {_id: false},
    // );

    // const FoodCardSchema = new Schema(
    //     {
    //         user: [{ type: String, required: true, ref: "User"}],
    //         foodOrderItems: [FoodOrderItem],
    //     },
    //     {timestamps: true}
    // );


   import mongoose, {models, Schema} from "mongoose";  
   
     export const FoodSchema = new Schema({
      foodName: { type: String, required: true },
      foodPrice: { type: Number, required: true },
      foodImage: { type: String },
      quantity: { type: Number, default: 1 },
      category: { type: Schema.Types.ObjectId, ref: "Category" },
      ingredients: {type: String }
       },
       {timestamps: true},
    );
   
       export const FoodModel = models["Food"] || mongoose.model("Food", FoodSchema);
       