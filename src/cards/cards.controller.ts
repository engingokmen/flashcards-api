import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import {CardsService} from './cards.service'
import { CardDto } from './dtos/card.dto';
import { CreateCardDto } from './dtos/create-card.dto';

@Controller('card')
@UseGuards(AuthGuard)
@Serialize(CardDto)
export class CardsController {
    constructor(
        private cardsService: CardsService,
      ) {}

    @Post('/')
    create(@Body() body: CreateCardDto, @CurrentUser() user: User) {
        return this.cardsService.create(body.term, body.definition, user)
    }
    
    @Get('/')
    getCards( @CurrentUser() user: User) {
        return this.cardsService.find(user)
    }
}
