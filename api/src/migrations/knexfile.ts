import type { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + '/../../.env' });

console.log('Env vars:', {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME
});

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "plants",
      directory: "./migrate",
      extension: "ts"
    }
  },
};

export default config;