import { FC, useState } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import '../styles/rcTabs.css';
import { TodoItem } from "../types/todoItem";
import { TodoItemComponent } from "./TodoItemComponent";
import { AddItemComponent } from "./AddItemComponent";
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

    const addItem = (text: string)=> {
        if(!text || !text.trim())
            return;
        const newItem: TodoItem = {id: "td" + (items.length + 1), name: text, checked: false};
        const oldItems = [...items];
        oldItems.push(newItem);
        updateItems(oldItems);
    }

    const deleteItem = (id: string) => {
        let newItemList = [...items];
        const delIdx = newItemList.map(i => i.id).indexOf(id);
        newItemList.splice(delIdx, 1);
        updateItems(newItemList);
    }

    const deleteAllComplete = () => {
        let itemState = [...items];
        const newItems = itemState.filter(item => !item.checked)
        updateItems(newItems);
    }

    const noItems = (
        <p>No tasks available</p>
    );

    return(
        <>
            <Tabs tabBarStyle={{borderBottom: '3px solid grey'}} animated={{ inkBar: true, tabPane: true }} tabBarGutter={150}>
                <TabPane tab="All" key="1">
                    <AddItemComponent addItemCb={addItem} />
                    { items.length > 0 ?
                        items.map((item) => {
                            return <TodoItemComponent key={item.id} todo={item} showDelete={false} onChangeCb={itemToggled} />
                        }) : noItems
                    }
                </TabPane>
                <TabPane tab="Active" key="2">
                    <AddItemComponent addItemCb={addItem} />
                    { items.some(i => !i.checked) ?
                        items.map((item)=>{
                            if(!item.checked)
                                return <TodoItemComponent key={item.id} todo={item} showDelete={false} onChangeCb={itemToggled}/>
                            return false;
                        }) : noItems
                    }
                </TabPane>
                <TabPane tab="Completed" key="3">
                {items.some(i => i.checked) ?
                    items.map((item)=>{
                        if(item.checked)
                            return <TodoItemComponent key={item.id} todo={item} showDelete={true} onChangeCb={itemToggled} onDeleteCb={deleteItem} />
                        return false;
                    }) : noItems
                }
                <div className="deleteAllDiv">
                    <button onClick={()=> deleteAllComplete()} className="deleteAllBtn">Delete All <img src="/bin.png" alt="delete" /></button>
                </div>
                </TabPane>
            </Tabs>
        </>
    );
}