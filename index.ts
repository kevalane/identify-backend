import express, {Request, Response} from 'express';
import {authRouter} from './routes/auth.routes';
import bodyParser from 'body-parser';

// global constants
const configUrl: string = '/api/';

// init app
const app = express();
const port = 3000;
app.listen(port, () => {
	console.log('Running on port ' + port);
});

app.use(bodyParser.json());

// Routes
app.use(configUrl + 'auth', authRouter);

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send({msg: 'Hello world'});
});
