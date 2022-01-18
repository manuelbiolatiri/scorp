import { RequestHandler, Request, Response, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize } from "class-sanitizer";

class DtoValidatorMiddleware {
  async extractId(req: Request, res: Response, next: NextFunction) {
    req.body.uuid = req.params.id;
    next();
  }

  dtoValidationMiddleware(
    type: any,
    skipMissingProperties = false
  ): RequestHandler {
    return (req, res, next) => {
      const dtoObj = plainToClass(type, req.body);
      validate(dtoObj, { skipMissingProperties }).then(
        (errors: ValidationError[]) => {
          if (errors.length > 0) {
            const dtoErrors = errors
              .map((error: ValidationError) =>
                (Object as any).values(error.constraints)
              )
              .join(", ");
            res.status(400).send({ error: dtoErrors });
          } else {
            //sanitize the object and call the next middleware
            sanitize(dtoObj);
            req.body = dtoObj;
            next();
          }
        }
      );
    };
  }
}

export default new DtoValidatorMiddleware();
