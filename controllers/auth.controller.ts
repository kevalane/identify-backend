import express, {Request, Response} from 'express';

function initSign(req: Request, res: Response): Response {
    return res.send({msg: 'initSign hit'});
}

export {
    initSign
}