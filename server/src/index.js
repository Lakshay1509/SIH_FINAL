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
    res.send('Hello')
})

import userRoutes from './routes/user.routes.js'

app.use('/api/v1/user', userRoutes);



app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on port ${process.env.PORT || 8000}`)
})

export {app}