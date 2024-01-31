import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { FileModule } from './file/file.module';
import { FileEntity } from './file/entities/file.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.POSTGRESS_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_USERNAME,
      entities: [UserEntity, FileEntity],
      synchronize: true,
    }),
    UserModule,
    FileModule,
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
