import { Expose } from 'class-transformer';

export class TermDto {
  @Expose()
  name: string;
}
