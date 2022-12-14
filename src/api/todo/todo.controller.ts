import { Request, Response } from "express";
import { BadRequestError } from "../../common/errors";
import { CrudController } from '../../common/interfaces/controller.class'
import { createTodolistDTO } from "./dto/todolist.dto";
import { createTodolist } from "./todo.service";
import { createTodolistCheck } from './todo.validator'

class TodosController extends CrudController {

    static getAll(req: Request, res: Response) {

    }

    static getOne(req: Request, res: Response) {

    }

    static async create(req: Request, res: Response) {
        const check = createTodolistCheck(req.body)
        if (check === true) {
            const result = await createTodolist(req.body)
            res.json(result)
        } else {
            throw new BadRequestError('bad schema createTodolist')
        }
    }

    static remove(req: Request, res: Response) {

    }

    static update(req: Request, res: Response) {

    }

    static replace(req: Request, res: Response) {

    }
}

export default TodosController