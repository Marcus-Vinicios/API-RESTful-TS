import { Router, Request, Response } from "express";
import { createMovie, getMovies } from "../controllers/MovieController";
import { validate } from "../middlewares/handleValidation.middleware";
import { createValidator } from "../middlewares/movieValidator.middleware";

const router = Router();

export default router.get("/list/movies", getMovies, (req: Request, res: Response) => {
  res.status(200).send("API funcionando!")
}).post("/add/movie", createValidator(), validate, createMovie);