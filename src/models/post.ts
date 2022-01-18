import { Column, Entity } from "typeorm";
import { BaseModel } from "./baseModel";

@Entity()
export class Post extends BaseModel {
  @Column()
  description: string;

  @Column()
  user_id: number;

  @Column()
  public image: string;
}
