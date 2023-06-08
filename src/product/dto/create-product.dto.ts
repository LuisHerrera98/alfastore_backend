import { IsInt, IsString, MinLength, IsPositive, Min, IsArray } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    name: string;

    @IsInt()
    @IsPositive()
    @Min(1)
    cost: number;

    @IsInt()
    @IsPositive()
    @Min(1)
    price: number;

    @IsArray()
    images: string[]
}
