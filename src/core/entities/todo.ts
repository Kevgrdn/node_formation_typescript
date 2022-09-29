import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TodoList } from "./todolist";

enum TodoState {
    DONE = "done",
    TODO = "todo"
}

@Entity()
export class Todo {
   
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text:string

    @Column()
    archived: TodoState

    @ManyToOne(() => TodoList, (todolist) => todolist.todos)
    todolist: TodoList
}

