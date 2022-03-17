import { FC } from "react";
import '../styles/styles.css'
import {TodoItem} from '../types/todoItem'
export const TodoItemComponent: FC<TodoItem> = ({id, name, checked, onChangeCb}) => {
    return (
        <div className="todoRow">
            <input type="checkbox" id={id} name={name} checked={checked} onChange={onChangeCb(id)} />
            <label htmlFor={name}>{name}</label>
        </div>
    );
}