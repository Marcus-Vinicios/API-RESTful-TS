import { body } from "express-validator";

export function createValidator() {
  return [
    body("title")
      .isString()
      .withMessage("O titúlo é obrigatório.")
      .isLength({ min: 2 })
      .withMessage("O titúlo deve ter no mínimo 2 caracteres."),
    body("rating")
      .isNumeric()
      .withMessage("A nota é obrigatória.")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("O valor da nota precisa ser entre 0 a 10.");
        }
        return true
      }),
    body("description")
      .isString()
      .withMessage("A descrição é obrigatória."),
    body("director")
      .isString()
      .withMessage("Informe o nome do diretor do filme."),
    body("poster")
      .isURL()
      .withMessage("A imagem do poster precisa ser uma URL.")
  ]
}