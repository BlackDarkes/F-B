import type { Knex } from "knex";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + '/../../.env' });

export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, "./migrations"),
    tableName: "knex_migrations",
    extension: "ts",
  },
} as Knex.Config;
