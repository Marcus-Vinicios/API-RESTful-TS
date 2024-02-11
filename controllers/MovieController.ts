import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../config/logger";

export async function createMovie(req: Request, res: Response) {
  const { title, rating, description, director, stars, poster } = req.body;

  try {
    const movie = new MovieModel(
      {
        title,
        rating,
        description,
        director,
        stars,
        poster
      }
    );

    await movie.save();
    Logger.info("Filme cadastrado com sucesso!");
    return res.status(201).json({
      message: "Filme cadastrado com sucesso!",
      movie
    })
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
    return res.status(401).send(error.message);
  }
}
