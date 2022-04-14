import 'reflect-metadata'
import express, { NextFunction,Request, Response } from 'express';
import 'express-async-errors'
import cors from 'cors';
import { pagination } from 'typeorm-pagination';
import { errors } from 'celebrate';
import AppError from '../errors/AppError';
import { routes } from './routes';
import '../../database'

const app = express();

app.use(express.json());

app.use(pagination);

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    app.use(cors());
    next();
});

app.use(routes);
app.use(errors());

app.use( (error: Error, request: Request, response: Response, next: NextFunction,) => {
        if(error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    },
);

app.listen(3333, () => console.log("Server started!"));


