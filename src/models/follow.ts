import { Column, Entity } from "typeorm";
import { BaseModel } from "./baseModel";

@Entity()
export class Follow extends BaseModel {
  @Column()
  public follower_id: number;

  @Column()
  public following_id: number;
}
