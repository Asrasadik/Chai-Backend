//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import mongoose from "mongoose";

dotenv.config({
  path: "./env",
});
/* console.log(process.env.MONGODB_URI);
mongoose
  .connect(
    process.env.MONGODB_URI
    //"mongodb+srv://asra1:hitesh123@cluster0.3puyt4x.mongodb.net/test"
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Connection errorrr:", err);
  }); */

connectDB();

/*import express from "express";

const app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => { //on error
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`APP is Listeningon Port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
