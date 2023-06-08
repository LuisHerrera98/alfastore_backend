import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoryModel.create(createCategoryDto)
      return category
    } catch (error) {
      throw new BadRequestException('La categoria ya existe');
    }
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
