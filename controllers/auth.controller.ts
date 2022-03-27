import express, {Request, Response} from 'express';
import axiosLib, { Axios } from 'axios';
import https from 'https';
import fs from 'fs';

// configs
const config: any = {
    mobileBankIdPolicy: '1.2.3.4.25',
    bankdIdUrl: 'https://appapi2.test.bankid.com/rp/v5',
    pfx: fs.readFileSync('./cert/FPTestcert3_20200618.p12'),
    passphrase: 'qwerty123',
    ca: fs.readFileSync('./cert/public-test-key.crt'),
}

const axios: Axios = axiosLib.create({
    httpsAgent: new https.Agent({
        pfx: config.pfx,
        passphrase: config.passphrase,
        ca: config.ca,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})

function initSign(req: Request, res: Response): Response {
    return res.send({msg: 'initSign hit'});
}

export {
    initSign
}
