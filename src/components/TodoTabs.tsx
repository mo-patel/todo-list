import { FC } from "react";
import Tabs, { TabPane } from 'rc-tabs';
import '../styles/rcTabs.css';
interface TodoTabs {
    activeType: number
}

export const TodoTabs: FC<TodoTabs> = ({activeType}) => {
    return(
        <>
            <Tabs tabBarGutter={150}>
                <TabPane tab="All" key="1">
                    First Tab
                </TabPane>
                <TabPane tab="Active" key="2">
                    Second Tab
                </TabPane>
                <TabPane tab="Completed" key="3">
                    Third Tab
                </TabPane>
            </Tabs>
        </>
    );
}