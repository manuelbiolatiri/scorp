import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public username: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public profile_picture: string;

  @IsNotEmpty()
  @IsString()
  public full_name: string;

  @IsNotEmpty()
  @IsString()
  public bio: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  public username: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public profile_picture: string;

  @IsNotEmpty()
  @IsString()
  public full_name: string;

  @IsNotEmpty()
  @IsString()
  public bio: string;
}
