/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client_Details } from './Entities/ClientEntity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'testdb',
      entities: [Client_Details],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Client_Details])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
