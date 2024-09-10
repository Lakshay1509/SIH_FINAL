import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
})); 
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json('Hello')
})

import userRoutes from './routes/user.routes.js'

app.use('/api/v1/user', userRoutes);

export {app}