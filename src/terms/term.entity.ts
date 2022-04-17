import { Set } from 'src/sets/set.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Term {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  term: string;

  @Column()
  definition: string;

  @ManyToOne(()=>Set, (set) => set.term)
  set: Set
}
