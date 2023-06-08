import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";

@Schema()
export class Category extends Document{
    @Prop({
        index: true,
        unique: true,
    })
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category)
