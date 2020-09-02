import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const handleListening = () =>
  console.log(`listening at http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello world!!!");

const handleProfile = (req, res) => res.send("you are on my profile");

const betweenHome = (req, res, next) => {
  console.log("between");
  next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
