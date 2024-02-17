import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dbConfig from './config/db/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig()), // Fix this line
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
