import { Module } from '@nestjs/common';
import { ProductOrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Order } from './orders/entities/order.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      namingStrategy: new SnakeNamingStrategy(),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Order],
      synchronize: true,
    }),
    ProductOrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
