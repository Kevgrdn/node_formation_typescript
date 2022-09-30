import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TodoList } from "./todolist";
import { TodoState } from "../../common/interfaces";


@Entity()
export class Todo {
   
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text:string

    @Column({default: TodoState.TODO})
    state: TodoState

    @ManyToOne(() => TodoList, (todolist) => todolist.todos)
    todolist: TodoList
}

