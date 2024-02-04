import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Database from "./db/index,";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

const connection = new Database()
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// const start = async (): Promise<void> => {
//   try {
//     await Database.connectToDatabase(); // Synchronizes the database with the defined models
//     app.listen(3000, () => { // Starts the server on port 3000
//       console.log("Server started on port 3000");
//     });
//   } catch (error) {
//     console.error(error); // Logs any errors that occur
//     process.exit(1); // Exits the process with an error status code
//   }
// };

// void start();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Serverrr");
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is runninnng at http://localhost:${port}`);
// });