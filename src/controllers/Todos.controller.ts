import { log } from "console";
import { Request, Response } from "express";

import { getRepository, Repository } from "typeorm";

import Todos from "../models/Todos.models";

export default class TodosController{


    static getAll = async (req:Request, res:Response) => {
        try{
            const todosRepository:Repository<Todos> = getRepository(Todos);
            const data = await todosRepository.find();
            res.send(data);
        }catch(e){
            res.status(404).send(e.message)
        }
    }
    static getOne = async (req:Request, res:Response) => {
        try{
            const todosRepository:Repository<Todos> = getRepository(Todos);
            const todoId = parseInt(req.params.id,16);
            const data = await todosRepository.findOne({id : todoId});
            if(data){
                console.log(data);
                res.send(data);
            }else{
                const error = new Error();
                error.message = "Todo not found";
                res.status(404).send(error.message)
            }  
        }catch(e){
            res.status(400).send(e.message)
        }
    }
    static createTodo = async (req:Request, res:Response) => {
        try{
            const todosRepository:Repository<Todos> = getRepository(Todos);
            const dataTodo:any = req.body;
            const newTodo:Todos = new Todos();
            newTodo.title = dataTodo.title;
            const data:Todos = await todosRepository.save(newTodo);
            res.send(newTodo)
        }catch(e){
            res.status(400).send(e.message)
        }   
    }

    static updateTodo = async (req:Request, res:Response) => {
        try{
            const todosRepository:Repository<Todos> = getRepository(Todos);
            const todoId = parseInt(req.params.id, 16);
            await todosRepository.update({id : todoId},req.body)
            res.send('todo');
        }catch(e){
            res.status(400).send(e.message);
        }
    }
    static deleteTodo = async (req:Request, res:Response) => {
        try{
            const todosRepository:Repository<Todos> = getRepository(Todos);
            const todoId = parseInt(req.params.id, 16);
            await todosRepository.delete({id : todoId})
            res.send('deleted');
        }catch(e){
            console.log(e)
            res.status(404).send(e.message);
        }
    }
}