import express, {Request, Response} from 'express';
const request = require('request');

// global vars
const configUrl: string | undefined = process.env.URL;
const creditor_id: string | undefined = process.env.CREDITOR_ID;
const api_key: string | undefined = process.env.API_KEY;


function initSign(req: Request, res: Response): Response {
    return res.send({msg: 'initSign hit'});
}

export {
    initSign
}