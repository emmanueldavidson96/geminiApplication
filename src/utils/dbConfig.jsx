import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://beat-cancer_owner:SrhzUM0t9PdG@ep-dawn-recipe-a5v4iunl.us-east-2.aws.neon.tech/beat-cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });