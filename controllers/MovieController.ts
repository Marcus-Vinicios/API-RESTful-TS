import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../config/logger";

type Stars = Array<number>;

interface Movie {
  title: string
  rating: number | string
  description: string
  director: string
  stars: Stars
  poster: string
}

export async function createMovie(req: Request, res: Response) {
  const { title, rating, description, director, stars, poster }: Movie = req.body;

  if (!title) { return res.status(422).send("Insira um titúlo ao filme.") }
  if (!rating) { return res.status(422).send("Insira a classificação do filme.") }
  if (!description) { return res.status(422).send("Insira a descrição do filme.") }
  if (!director) { return res.status(422).send("Informe o diretor do filme.") }
  if (!stars || stars.length <= 0) { return res.status(422).send("Insira um numero de estrlas ao filme.") }
  if (!poster) { return res.status(422).send("Insira um poster ao filme.") }

  const movie: Movie = {
    title,
    rating,
    description,
    director,
    stars,
    poster
  }

  return res.status(200).json({
    message: "Filme cadastrado com sucesso!",
    movie
  })
}
