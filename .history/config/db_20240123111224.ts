import { connect } from "mongoose";
import "dotenv/config";
const MONGODB_URL = process.env.APP_MONGODB_URL;

connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("[db connection] Database connected");
  })
  .catch((error) => {
    console.error("[db connection] Connection failed", error.message);
  });
