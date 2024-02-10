require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import connect from "../config/db";

const port = config.get<number>("port");
const app = express();

app.use(express.json());

app.use("/api/", router);

app.listen(port, async () => {
  await connect();
  console.log("App running...");
});