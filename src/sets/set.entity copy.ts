import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Set {
  @PrimaryGeneratedColumn()
  id:number

  @Column({unique:true})
  term: string;

  @Column()
  definition: string;

  @ManyToOne(()=>User, (user) => user.set)
  user: User
}