import { ObjectId } from "mongodb";
import mongoose, {models, Schema} from "mongoose"; 

export const OrderSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    foods: [
        {
            food: { type: Schema.Types.ObjectId, ref: "Food" },
        }],
    totalPrice: {type: Number},
    address: String,
    status: { type: String, enum: ["Pending", "Processing", "Delivered", "Cancelled"], default: "Pending" },
},{ timestamps: true }
);
export const OrderModel = models["Order"] || mongoose.model("Order", OrderSchema);

