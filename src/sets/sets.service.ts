import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Set } from './set.entity';

@Injectable()
export class SetsService {
  constructor(@InjectRepository(Set) private repo: Repository<Set>) {}

  async create(name: string, user: User) {
    const sets = await this.find(user);
    if (sets.findIndex((i) => i.name === name) !== -1) {
      throw new BadRequestException('The set is already defined');
    }
    const set = this.repo.create({ name, user });
    const result = await this.repo.save(set);

    return result;
  }

  async find(user: User) {
    return this.repo.find({ user });
  }
}
