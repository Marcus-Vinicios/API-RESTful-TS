import { Router, Request, Response } from "express";
import { createMovie, getMovieById, getMovies, removeMovieById, updateMovie } from "../controllers/MovieController";
import { validate } from "../middlewares/handleValidation.middleware";
import { movieValidator } from "../middlewares/movieValidator.middleware";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API funcionando!")
  })
  .get("/movies", getMovies)
  .post("/add/movie", movieValidator(), validate, createMovie)
  .get("/movie/:id", getMovieById)
  .delete("/delete/movie/:id", removeMovieById)
  .patch("/update/movie/:id", movieValidator(), validate, updateMovie);