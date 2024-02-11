import { Router, Request, Response } from "express";
import { createMovie, getMovieById, getMovies } from "../controllers/MovieController";
import { validate } from "../middlewares/handleValidation.middleware";
import { createValidator } from "../middlewares/movieValidator.middleware";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API funcionando!")
  })
  .get("/list/movies", getMovies)
  .post("/add/movie", createValidator(), validate, createMovie)
  .get("/movie/:id", getMovieById)