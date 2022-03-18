import { ChangeEvent, FC, useState } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import '../styles/rcTabs.css';
import { TodoItem } from "../types/todoItem";
import { TodoItemComponent } from "./TodoItem";
interface todoTabsProps {
    data: TodoItem[]
    activeType: number
}

export const TodoTabs: FC<todoTabsProps> = ({data, activeType}) => {
    const [items, updateItems] = useState(data);
    const itemToggled = (id: string)=>{
        const newItemList = [...items];
        const updIdx = newItemList.map(i => i.id).indexOf(id);
        newItemList[updIdx].checked = !newItemList[updIdx].checked;
        updateItems(newItemList);
    }

    return(
        <>
            <Tabs tabBarStyle={{borderBottom: '3px solid grey'}} animated={{ inkBar: true, tabPane: true }} tabBarGutter={150}>
                <TabPane tab="All" key="1">
                    {
                        items.map((item) => {
                            return <TodoItemComponent key={item.id} todo={item} onChangeCb={itemToggled} />
                        })
                    }
                </TabPane>
                <TabPane tab="Active" key="2">
                    {
                        items.map((item)=>{
                            if(!item.checked)
                                return <TodoItemComponent key={item.id} todo={item} onChangeCb={itemToggled} />
                            return false;
                        })
                    }
                </TabPane>
                <TabPane tab="Completed" key="3">
                {
                    items.map((item)=>{
                        if(item.checked)
                            return <TodoItemComponent key={item.id} todo={item} onChangeCb={itemToggled} />
                        return false;
                    })
                }
                </TabPane>
            </Tabs>
        </>
    );
}