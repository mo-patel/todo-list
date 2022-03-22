import { FC, useState } from "react";

interface addItemProps {
    addItemCb: (text: string) => void;
}

export const AddItemComponent: FC<addItemProps> = ({addItemCb}) => {
    const [newText, updateNewText] = useState("");
    const overrideSubmit = (e?: any) =>{
        if(e && e.key !== "Enter")
            return;
        addItemCb(newText);
        updateNewText("");
    }
    return (
        <div className="addItemRow">
            <input className="addItemTxt" type="text" maxLength={100} name="addItem" placeholder="Add details" 
            onChange={(e)=> updateNewText(e.target.value)} onKeyUp={(e) => overrideSubmit(e)} value={newText}/>
            <input className="addItemSubmit" type="submit" title="Submit" onClick={() => overrideSubmit()}/>
        </div>
    );
}