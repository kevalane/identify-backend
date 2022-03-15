import express, {Request, Response} from 'express';
import {authRouter} from './routes/auth.routes';

// global consts
const configUrl: string = '/api/';

// init app
const app = express();
const port = 3000;
app.listen(port, () => {
	console.log('Running on port ' + port);
});

// Routes
app.use(configUrl + 'auth', authRouter);

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send({msg: 'Hello world'});
});
