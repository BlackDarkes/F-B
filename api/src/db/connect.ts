import { createPool, Pool } from "mysql2/promise";
import "dotenv/config";

export const pool: Pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  queueLimit: 10,
  waitForConnections: true
})