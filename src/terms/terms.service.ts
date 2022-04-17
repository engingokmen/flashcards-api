import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Term } from './term.entity';

@Injectable()
export class TermsService {
  constructor(@InjectRepository(Term) private repo: Repository<Term>) {}

  async create(term: string, definition: string, setId: number) {
    const terms = await this.find(setId);
    if (terms.findIndex((i) => i.term === term) !== -1) {
      throw new BadRequestException('The term is already defined');
    }
    const termObj = this.repo.create({ term, definition, set: { id: setId } });
    const result = await this.repo.save(termObj);

    return result;
  }

  async find(setId: number) {
    console.log('find setId', setId);
    return this.repo.find({
      where: { set: setId },
    });
  }
}
