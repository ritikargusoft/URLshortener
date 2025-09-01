import mysql from "mysql2/promise"
import "dotenv/config"

import { drizzle } from "drizzle-orm/mysql2";
const pool = mysql.createPool({
    uri: process.env.DATABASE_URL
})
export const db = drizzle(pool);
