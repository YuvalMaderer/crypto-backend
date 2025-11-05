const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

const allowedOrigins = [
  "http://localhost:5173",
  "https://crypto-frontend-cgc5uq495-yuvals-projects-a495a31c.vercel.app",
  "https://crypto-frontend-blush.vercel.app",
];

async function main() {
  await connectDB();

  app.use(express.static("public"));
  app.use(express.json());

  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    })
  );

  //  Routes
  app.use("/api/auth", require("./routes/auth.routes"));
  app.use("/api/user", require("./routes/user.routes"));
  app.use("/api/feedback", require("./routes/feedback.routes"));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
