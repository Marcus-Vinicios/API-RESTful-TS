require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import connect from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "../middlewares/morgan.middleware";

const port = config.get<number>("port");
const app = express();

app.use(express.json());
app.use(morganMiddleware);

app.use("/api/", router);

app.listen(port, async () => {
  await connect();
  Logger.info("App running...");
});