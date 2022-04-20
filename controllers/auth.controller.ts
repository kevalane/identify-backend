import express, {Request, Response} from 'express';
import axiosLib, { Axios } from 'axios';
import https from 'https';
import fs from 'fs';

// global vars
const configUrl: string | undefined = process.env.URL;
const creditor_id: string | undefined = process.env.CREDITOR_ID;
const api_key: string | undefined = process.env.API_KEY;

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

function initSign(req: Request, res: Response): Response | void {
    axios.post(config.bankdIdUrl + '/auth', {
        endUserIp: '127.0.0.1',
        personalNumber: req.body.ssn
    }).then(response => {
        return res.send({msg: 'Öppna Mobilt BankID och legitimera dig ...', data: response['data']});
    }).catch(err => {
        return res.status(400).send({err: err.message});
    });
}

export {
    initSign
}
