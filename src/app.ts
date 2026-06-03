import express from 'express';
import { logger } from './config/logger';
import helmet from 'helmet'
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(morgan('combined',{stream :{write:(message)=>logger.info(message.trim())}}))

app.get('/', (req, res) => {
    logger.info('hello from logger');
    return res.status(200).json({ msg: 'hello from backend' });
});

export default app;
