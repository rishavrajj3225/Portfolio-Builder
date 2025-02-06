import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const App = express();

App.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// use to limit in form of json;
App.use(
  express.json({
    limit: "32kb",
  })
);
// if any public file come then it will store on my local public folder
App.use(express.static("public"));
// for safe and secure crud operation on cookie on user browser
App.use(cookieParser());

export { App };
