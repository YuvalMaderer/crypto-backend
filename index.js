const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config(); // Load config
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

async function main() {
  // Connect to database
  await connectDB();

  // parse json body in request (for POST, PUT, PATCH requests)
  app.use(express.static("public"));
  app.use(express.json());

  // allow CORS for local development (for production, you should configure it properly)
  app.use(cors());

  // Routes
  app.use("/api/auth", require("./routes/auth.routes"));
  app.use("/api/user", require("./routes/user.routes"));
  app.use("/api/feedback", require("./routes/feedback.routes"));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
