import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";

@Schema()
export class Product extends Document{
    @Prop({
        index: true,
    })
    name: string;

    @Prop({
        index:true,
    })
    cost: number;

    @Prop({
        index:true,
    })
    price: number;

    @Prop({
        index:true,
    })
    images: [];
}

export const ProductSchema = SchemaFactory.createForClass(Product)
