import express from 'express';
import {config} from 'dotenv';
import todosRouter from './routes/todos.routes';
import connection from './database';
import {json} from 'body-parser';
import Database from './database';

config({
    path : 'variables.env'
})


    const app = express();


    app.use(json())
    app.use(todosRouter);
const init = async () =>{
    const db = Database.initDatabase();
    if(db){
        app.listen(process.env.PORT, () => {
            console.log(`Server is runing on http://localhost:${process.env.PORT}`)
        })
    }else{
        console.log("ERROR IN DATABASE")
    }
}
    
init();
