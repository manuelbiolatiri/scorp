import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFollowDto {
  @IsNotEmpty()
  @IsNumber()
  public follower_id: string;

  @IsNotEmpty()
  @IsNumber()
  public following_id: number;
}

export class UpdateFollowDto {
  @IsNotEmpty()
  @IsNumber()
  public follower_id: string;

  @IsNotEmpty()
  @IsNumber()
  public following_id: number;
}
