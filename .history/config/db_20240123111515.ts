import { connect } from "mongoose";
import "dotenv/config";
const MONGODB_URL = <string>process.env.APP_MONGODB_URL;

async function dbConnect(): Promise<void> {
  await connect(MONGODB_URL);
}

export default dbConnect;
