import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";

@Schema()
export class Size extends Document{
    @Prop({
        index: true,
    })
    name: string;

    @Prop({
        index:true,
    })
    category: string;
}

export const SizeSchema = SchemaFactory.createForClass(Size)