import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from 'src/sets/set.entity';
import { Term } from './term.entity';
import { TermsController } from './terms.controller';
import { TermsService } from './terms.service';

@Module({
  imports: [TypeOrmModule.forFeature([Term, Set])],
  controllers: [TermsController],
  providers: [TermsService],
})
export class TermsModule {}
