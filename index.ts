import express, {Request, Response} from 'express';

const app = express();

const port = 3000;

app.listen(port, () => {
	console.log('Running on port ' + port);
});

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send({msg: 'Hello world'});
});
