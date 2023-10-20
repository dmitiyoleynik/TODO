import { Request, Response } from 'express';
import validator from 'validator';

interface TypedRequestBody<T> extends Request {
  body: T;
}

class AuthController {
  login() {}
  signUp(req: TypedRequestBody<{ email: string; password: string }>, res: Response) {
    console.log({ body: req.body });
    const { email, password } = req.body;
    const isValidEmail = validator.isEmail(email);
    const isValidPassword = validator.isStrongPassword(password, {
      minLength: 8,
    });

    if (isValidEmail && isValidPassword) {
    } else {
      res.status(400).send('Wrong email or password format');
    }
  }
}
export default new AuthController();
