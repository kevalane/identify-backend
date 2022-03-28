import express, {Router} from 'express';
import { initSign } from '../controllers/auth.controller';

let authRouter: Router = express.Router();

authRouter.get('/initSign', initSign);

export { authRouter };