import { Column, Entity } from "typeorm";
import { BaseModel } from "./baseModel";

@Entity()
export class Like extends BaseModel {
  @Column()
  public post_id: number;

  @Column()
  public user_id: number;
}
