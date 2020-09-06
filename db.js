import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const ofenHandler = () => console.log("conneted to DB");
const errorHandler = (error) => console.log(`Error on DB Connection: ${error}`);

db.once("open", ofenHandle());
db.on("error", console.error.bind(console, "connection error:"));
