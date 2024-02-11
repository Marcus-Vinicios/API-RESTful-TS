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

export async function getMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find().sort("-createdAt");

    return res.status(200).json({
      movies: movies,
    })
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res.status(401).send(error.message);
  }
}

export async function getMovieById(req: Request, res: Response) {

  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." });
    }

    return res.status(200).json({ movie });

  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }

}

export async function removeMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "O filme não existe." });
    }

    await movie?.deleteOne();

    return res.status(200).json({ message: "Filme removido com sucesso." });

  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res.status(500).json({ error: "Por favor tente mais tarde." });
  }
}