const db = require("mongoose");

const MONGODB_URL = process.env.APP_MONGODB_URL;
db.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("[db connection] Database connected");
  })
  .catch((error) => {
    console.error("[db connection] Connection failed", error.message);
  });
