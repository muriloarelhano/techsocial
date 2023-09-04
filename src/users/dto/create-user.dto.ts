import { IsDateString, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  document: string;
  @IsString()
  email: string;
  @IsPhoneNumber()
  phoneNumber: string;
  @IsDateString()
  birthDate: string;
}
