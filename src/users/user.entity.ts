import { Exclude } from 'class-transformer';
import { Card } from 'src/cards/card.entity';
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

  @OneToMany(()=>Card, (card) => card.user)
  card: Card[]

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
