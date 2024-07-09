// require("dotenv").config();
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://database-1_owner:8jGCTrWq3ivL@ep-icy-pond-a1ogwapu.ap-southeast-1.aws.neon.tech/database-1?sslmode=require',
  }
};
