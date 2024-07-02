import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CROS_ORIGIN, //CROS_ORIGIN=* means allow from everywhere this is not good approach but for now its fine
    Credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //extended means we can give data in nested objects

//to store files or pdf's in server we use public folder using static() here public is folder name where we want to keep files or pdf
app.use(express.static("public"));
app.use(cookieParser());
export { app };
