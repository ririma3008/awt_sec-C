
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty({ message: 'name should not be empty' })
  name!: string;

  @IsString()
  @IsNotEmpty()
  code!: string;

  @IsString()
  @IsNotEmpty()
  instructor!: string;

  @IsNumber()
  @Min(1)
  @Max(6, { message: 'credits must not be greater than 6' })
  credits!: number;
}
