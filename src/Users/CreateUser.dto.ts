import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
