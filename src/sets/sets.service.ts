import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Set } from './set.entity';

@Injectable()
export class SetsService {
    constructor(@InjectRepository(Set) private repo: Repository<Set>) {}

    async create(name:string, user:User) {
        const set = this.repo.create({ name, user });
        var result;
        try {
            result = await this.repo.save(set);
        }catch(err) {
            if(err.code === "23505") {
                throw new BadRequestException('The set is already defined');
            }
        }
        return result
      }
    
    async find(user:User) {
        return this.repo.find({user})
    }
}
