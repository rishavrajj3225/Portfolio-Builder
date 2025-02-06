import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import {App} from "./app.js";
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Database connection successful!");
    App.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();
// Init Middleware
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/generatepage", require("./routes/generatepage"));


