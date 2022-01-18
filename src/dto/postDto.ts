import { Trim } from "class-sanitizer";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { Post } from "../models";

export class MergePostDto {
  @IsNotEmpty()
  @IsNumber()
  @IsArray()
  public post_ids: Partial<Post[]>[];
}

export class FindPostIdsDto {
  @IsNotEmpty()
  @IsNumber()
  public user_id: number;

  @IsNotEmpty()
  @IsArray()
  public post_ids: number[];
}

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @Trim()
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  public user_id: number;

  @IsNotEmpty()
  @IsString()
  public image: string;
}
