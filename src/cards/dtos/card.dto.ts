import { Expose } from 'class-transformer';

export class CardDto {
  @Expose()
  term: string;

  @Expose()
  definition: string;
}
