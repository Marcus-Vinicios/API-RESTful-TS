import express from "express";
import config from "config";

const port = config.get<number>("port");
const app = express();

app.use(express.json());

app.listen(port, async () => {
  console.log("App running...");
});