import { TodoList, Todo } from './core/entities'
import { AppDataSource } from './core/db/data-source'

export async function createTestTodoList(): Promise<TodoList> {
    const todolist = new TodoList()
    todolist.name = "Ma premiere liste"
    todolist.archived = false

    return await AppDataSource.manager.save(todolist)
}