import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import {SetsService} from './sets.service'
import { SetDto } from './dtos/set.dto';
import { CreateSetDto } from './dtos/create-set.dto';

@Controller('set')
@UseGuards(AuthGuard)
@Serialize(SetDto)
export class SetsController {
    constructor(
        private setsService: SetsService,
      ) {}

    @Post('/')
    create(@Body() body: CreateSetDto, @CurrentUser() user: User) {
        return this.setsService.create(body.name, user)
    }
    
    @Get('/')
    getSets( @CurrentUser() user: User) {
        return this.setsService.find(user)
    }
}
