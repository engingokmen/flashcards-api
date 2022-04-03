import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoami(@CurrentUser() user: string) {
    return user;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const token = await this.authService.signup(body.email, body.password);
    return JSON.stringify({ token });
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto) {
    const token = await this.authService.signin(body.email, body.password);
    return JSON.stringify({ token });
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Get('')
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
