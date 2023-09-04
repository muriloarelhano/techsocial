import { IsDate, IsDateString, IsPhoneNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  document: string;

  @IsString()
  email: string;

  @ApiProperty({
    description: 'Phone number in E.164 format',
    example: '+5511999999999',
  })
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty({
    description: 'Birth date in ISO 8601 format',
    example: '12-18-2001',
  })
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  birthDate: string;
}
