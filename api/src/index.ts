import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

import * as Controllers from "./controllers/plants.controller";
import { pool } from "./db/connect";

const app: Express = express();
const PORT: number = Number(process.env.API_PORT) || 8000;
const HOST: string | undefined = process.env.API_HOST || "0.0.0.0";

app.use(cors());
app.use(express.json());

pool.getConnection()  
  .then((conn) => {
    console.log("Good Connection on database!");
    conn.release();
  })
  .catch((error) => {
    console.log("Bad connection: ", error);
    process.exit(1);
  })

app.get("/plants", Controllers.getPlants);

app.listen(PORT, HOST, (error: any) => {
  if (error) {
    console.log("Server error: ", error);
  }
  console.log("Server work!");
})  