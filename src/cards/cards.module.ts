import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardsService,{
    provide: APP_INTERCEPTOR,
    useClass: CurrentUserInterceptor,
  }],
  controllers: [CardsController]
})
export class CardsModule {}
