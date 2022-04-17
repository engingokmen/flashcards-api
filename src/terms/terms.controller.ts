import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { CreateTermDto } from './dtos/create-term.dto';
import { TermsService } from './terms.service';

@Controller('term')
export class TermsController {
  constructor(private termsService: TermsService) {}

  @Post('/:setId')
  createBySetId(
    @Body() body: CreateTermDto,
    @Param() params: { setId: number },
  ) {
    return this.termsService.create(body.term, body.definition, params.setId);
  }

  @Get('/:setId')
  getTermsBySetId(@Param() params: { setId: number }) {
    return this.termsService.find(params.setId);
  }
}
