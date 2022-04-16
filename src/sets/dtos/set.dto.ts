import { Expose } from 'class-transformer';

export class SetDto {
  @Expose()
  name: string;
}
