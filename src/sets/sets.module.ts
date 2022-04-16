import { Module } from '@nestjs/common';
import { SetsService } from './sets.service';
import { SetsController } from './sets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from './set.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Set])],
  providers: [SetsService,{
    provide: APP_INTERCEPTOR,
    useClass: CurrentUserInterceptor,
  }],
  controllers: [SetsController]
})
export class SetsModule {}
