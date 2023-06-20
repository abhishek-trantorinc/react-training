import {Todolist} from "./todolist";
import {useRef, useState} from "react";

export const TodoForm = () => {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const onSubmit = () => {
        setList([...list, {deleted: false, text: inputValue}]);
        setInputValue('');
    }
    const onClick = (item, index) => {
        const newList = [...list];
        newList[index].deleted = !newList[index].deleted;
        setList(newList);
    }
    return <>
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit()
        }}>
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} required={true}/>
        </form>
        <Todolist toggleStatus={(item, index) => {
            onClick(item, index)
        }
        } list={list}/>
    </>
}