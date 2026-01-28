import { useState } from "react";
function TodoInput({addTodo}){
    const [ text, setText ] = useState("");
    const handleAdd = ()=>{
        addTodo(text);
        setText("");
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Nhap cong viec"/>
            <button onClick={handleAdd}>Add</button>

        </div>
    )
}
export default TodoInput;