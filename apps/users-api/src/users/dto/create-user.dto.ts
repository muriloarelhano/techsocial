import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsPhoneNumber, IsString } from 'class-validator';

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
    example: '11999999999',
  })
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @ApiProperty({
    description: 'Birth date in ISO 8601 format',
    example: '12-18-2001',
  })
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  birthDate: string;
}
