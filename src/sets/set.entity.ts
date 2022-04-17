import { Term } from 'src/terms/term.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Set {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name: string;

  @ManyToOne(()=>User, (user) => user.set)
  user: User

  @OneToMany(()=>Term, (term) => term.set)
  term: Term[]
}
