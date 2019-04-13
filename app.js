import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routers";
import { globalRouter } from "./routers/globalRouter";
import { userRouter } from "./routers/userRouter";
import { videoRouter } from "./routers/videoRouter";


const app = express();

const handleHome = (req, res) => {
    res.send("Hello from home");
}

app.use(cookieParser());
app.use(bodyParser.json());
//app.use(bodyParser.urelencoded({extened:true}));
app.use(morgan("dev"));
app.use(helmet());

app.use("/", globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;