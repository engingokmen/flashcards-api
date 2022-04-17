import { IsString } from 'class-validator';

export class CreateTermDto {
  @IsString()
  term: string;

  @IsString()
  definition: string;
}
