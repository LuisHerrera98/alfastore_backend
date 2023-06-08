import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { EnvConfiguration } from './config/app.config';
import { joiValidationSchema } from './config/joi.validation';
import { CategoryModule } from './category/category.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: joiValidationSchema
    }),
    MongooseModule.forRoot(process.env.DATABASE_MONGO_URI),
    ProductModule,
    CategoryModule,
    StockModule
  ],
})
export class AppModule {}
