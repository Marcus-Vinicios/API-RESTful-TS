import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractErrors: Object[] = [];

  errors.array().map((err) => extractErrors.push({ [err.type]: err.msg }));

  return res.status(422).json({
    errors: extractErrors,
  });

}
