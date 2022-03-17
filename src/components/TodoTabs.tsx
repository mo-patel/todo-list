import { FC, useState } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import '../styles/rcTabs.css';
import { TodoItem } from "../types/todoItem";
import { TodoItemComponent } from "./TodoItem";
interface TodoTabs {
    data: TodoItem[]
    activeType: number
}

export const TodoTabs: FC<TodoTabs> = ({data, activeType}) => {
    const [items, updateItems] = useState(data);
    const itemToggled = (id: string)=>{
        const newItemList = [...items];
        const updIdx = newItemList.map(i => i.id).indexOf(id);
        newItemList[updIdx].checked = !newItemList[updIdx].checked;
        updateItems(newItemList);
    }

    return(
        <>
            <Tabs tabBarGutter={150}>
                <TabPane tab="All" key="1">
                    {
                        items.map((item) => {
                            return <TodoItemComponent key={item.id} id={item.id} name={item.name} checked={item.checked} onChangeCb={itemToggled} />
                        })
                    }
                </TabPane>
                <TabPane tab="Active" key="2">
                    {
                        items.map((item)=>{
                            if(!item.checked)
                                return <TodoItemComponent key={item.id} id={item.id} name={item.name} checked={item.checked} onChangeCb={itemToggled} />
                            return false;
                        })
                    }
                </TabPane>
                <TabPane tab="Completed" key="3">
                {
                    items.map((item)=>{
                        if(item.checked)
                            return <TodoItemComponent key={item.id} id={item.id} name={item.name} checked={item.checked} onChangeCb={itemToggled} />
                        return false;
                    })
                }
                </TabPane>
            </Tabs>
        </>
    );
}