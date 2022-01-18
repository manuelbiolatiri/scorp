import { ConnectionOptions } from "typeorm";

import { Post, Follow, User, Like } from "../models";
import dotenv from "dotenv";

// Init environment
dotenv.config();

const config: ConnectionOptions = {
  type: "postgres",
  name: "default",
  host: process.env.POSTGRES_HOST, // "localhost",
  port: Number(process.env.POSTGRES_PORT), // 5432,
  username: process.env.POSTGRES_USER, // "postgres",
  password: process.env.POSTGRES_PASSWORD, // "user",
  database: process.env.POSTGRES_DB, // "scorp",
  entities: [Post, Follow, User, Like],
  logging: true,
  // ssl: {
  //   rejectUnauthorized: false, // This line will fix new error
  // },
  synchronize: true,
};

export default config;
