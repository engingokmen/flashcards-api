import { IsString } from "class-validator";

export class CreateCardDto {
  @IsString()
  term: string;

  @IsString()
  definition: string;
}
