import express, {Router} from 'express';
import { initSign } from '../controllers/auth.controller';

let authRouter: Router = express.Router();

authRouter.post('/initSign', initSign);

export { authRouter };