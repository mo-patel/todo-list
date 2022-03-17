export interface TodoItem {
    id: string;
    name: string;
    checked: boolean;
    onChangeCb?: (id: string)=> void | undefined;
}