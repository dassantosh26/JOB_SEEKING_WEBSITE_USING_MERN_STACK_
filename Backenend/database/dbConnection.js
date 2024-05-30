/** @format */

import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_JOB_SEEKING_WEBSITE ",
    })
    .then(() => {
      console.log("Connected to Databsae");
    })
    .catch((err) => console.log("Error occured to connecting database:", err));
};
