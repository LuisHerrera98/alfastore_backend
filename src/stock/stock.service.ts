import { Injectable, BadRequestException } from '@nestjs/common';
import { UpdateStockDto } from './dto/update-stock.dto';
import { CreateSizeDto } from './dto/create-size.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Size } from './entities/size.entity';
import { Model } from 'mongoose';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Size.name)
    private readonly sizeModel: Model<Size>,
  ) {}

  async createSize(createSizeDto: CreateSizeDto) {
    const sizes = await this.sizeModel.find({
      name: createSizeDto.name,
      category: createSizeDto.category,
    });

    if (sizes.length > 0)
      throw new BadRequestException(
        'Ya existe un talle con ese nombre en esta categoria',
      );

    try {
      const size = await this.sizeModel.create(createSizeDto);
      return size;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    const data = [
      {
        id: '1',
        name: 'lucho',
        email: 'lucho@gmail.com'
      },
      {
        id: '2',
        name: 'gonza',
        email: 'gonza@gmail.com'
      },
      {
        id: '3',
        name: 'fede',
        email: 'fede@gmail.com'
      }
    ]
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
