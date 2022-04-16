import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id:number

  @Column({unique:true})
  term: string;

  @Column()
  definition: string;

  @ManyToOne(()=>User, (user) => user.card)
  user: User
}
