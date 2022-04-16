import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
    constructor(@InjectRepository(Card) private repo: Repository<Card>) {}

    async create(term:string, definition:string, user:User) {
        const card = this.repo.create({ term, definition, user });
        var result;
        try {
            result = await this.repo.save(card);
        }catch(err) {
            if(err.code === "23505") {
                throw new BadRequestException('Term is already defined');
            }
        }
        return result
      }
    
    async find(user:User) {
        return this.repo.find({user})
    }
}
