import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeSchema } from './entities/size.entity';

@Module({
  controllers: [StockController],
  providers: [StockService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Size', schema: SizeSchema },
    ])
  ]
})
export class StockModule {}
