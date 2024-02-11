import { Router, Request, Response } from "express";
import { createMovie } from "../controllers/MovieController";
import { validate } from "../middlewares/handleValidation.middleware";

const router = Router();

export default router.get("/teste", (req: Request, res: Response) => {
  res.status(200).send("API funcionando!")
}).post("/add/movie", validate, createMovie);