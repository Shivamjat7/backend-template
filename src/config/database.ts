import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const DATABASE_URL = <string>process.env.DATABASE_URL;
const sql = neon(DATABASE_URL);
const db = drizzle(sql);

export { db, sql };
