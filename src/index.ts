import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import dbConfig from "./config/database";
import { createConnection } from "typeorm";
import Router from "./routes";
import dotenv from "dotenv";

import errorMiddleware from "./middlewares/common/error-middleware";

dotenv.config();

const PORT = process.env.PORT || 8001;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use(Router);

app.use(errorMiddleware);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
