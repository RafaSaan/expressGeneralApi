import express, { Express } from "express";
import dotenv from "dotenv";
import sequelize from "./db/index,";
import masterRouter from './routes/index'
import cors from "cors";
import { json } from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;


const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    app.use(json())
    app.use('/api', masterRouter);
    app.use(cors());
    app.listen(port, () => {
      console.log('Connection has been established successfully.');
      console.log(`[server]: Server is runninnng at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();