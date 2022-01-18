import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLikeDto {
  @IsNotEmpty()
  @IsNumber()
  public user_id: string;

  @IsNotEmpty()
  @IsNumber()
  public post_id: number;
}

export class UpdateLikeDto {
  @IsNotEmpty()
  @IsNumber()
  public user_id: string;

  @IsNotEmpty()
  @IsNumber()
  public post_id: number;
}