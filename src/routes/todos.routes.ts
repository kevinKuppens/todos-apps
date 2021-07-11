import Router, {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import connection from '../database';
import Todos from '../models/Todos.models';
import TodosController from '../controllers/Todos.controller';

const todosRouter = Router();



    
todosRouter.get('/todos', TodosController.getAll)
todosRouter.get('/todos/:id', TodosController.getOne)
todosRouter.post('/todos', TodosController.createTodo)
todosRouter.put('/todos/:id', TodosController.updateTodo)
todosRouter.delete('/todos/:id', TodosController.deleteTodo)

export default todosRouter;
