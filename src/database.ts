import { createConnection } from "typeorm";
import Todos from "./models/Todos.models";

export default class Database{
    static initDatabase() {
        try{
            const connection = createConnection({
                type: "mysql",
                host : "localhost",
                port : 3306,
                username : "root",
                database : "mysqlTodos",
                entities: [Todos],
                synchronize: true
            })
            return connection;
        }catch(e){
            console.log(e);
        } 
    }
   
}


