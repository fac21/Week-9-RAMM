import pg from "pg";
import dotenv from "dotenv";
const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) throw new Error("DATABASE_URL env var is not defined");
dotenv.config();
const options = {
  connectionString: DB_URL,
};

const db = new pg.Pool(options);

export default db;
