import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_Najl3tGvhS7I@ep-floral-cake-a5jv6x9s-pooler.us-east-2.aws.neon.tech/NeonStudy-DB?sslmode=require",
  }
});
