import { Router, Request, Response, json } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter = Router();
authRouter.use(json());

authRouter.post('/login', (req: Request, res: Response) => {
  res.send('auth login mock');
});

authRouter.post('/logout', (req: Request, res: Response) => {
  res.send('auth logout mock');
});

authRouter.post('/signup', AuthController.signUp);

authRouter.post('/reset-pwd', (req: Request, res: Response) => {
  res.send('auth reset password mock');
});

export default authRouter;
