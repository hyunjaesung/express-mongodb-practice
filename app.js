import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { userRouter } from "./routers/globalRouter";
//import bodyParser from "body-parser";


const app = express();

const handleHome = (req, res) => {
    res.send("Hello from home");
}

app.use(cookieParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urelencoded({extened:true}));
app.use(morgan("dev"));
app.use(helmet());

app.use("/user", userRouter);

app.get("/", handleHome);

export default app;