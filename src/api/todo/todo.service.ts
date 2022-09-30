import { TodoList, Todo } from "../../core/entities";
import { AppDataSource } from "../../core/db/data-source";
import { createTodolistDTO } from "./dto/todolist.dto";

const todolistRepository = AppDataSource.getRepository(TodoList)
const todoRepository = AppDataSource.getRepository(Todo)

export function createTodolist(payload: createTodolistDTO) {
    const todolist = new TodoList()
    todolist.name = payload.name
    return todolistRepository.save(todolist)
}