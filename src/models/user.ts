import { Column, Entity } from "typeorm";
import { BaseModel } from "./baseModel";

@Entity()
export class User extends BaseModel {
  @Column()
  public username: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public full_name: string;

  @Column()
  public profile_picture: string;

  @Column()
  public bio: string;
}
