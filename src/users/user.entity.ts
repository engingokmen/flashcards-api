import { Exclude } from 'class-transformer';
import { Set } from 'src/sets/set.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(()=>Set, (set) => set.user)
  set: Set[]

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated user with Id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user with Id', this.id);
  }
}
