function TodoItem({todo, deleteToDo}){
    return(
        <li>{todo.text}
        <button onClick={()=>{deleteToDo(todo.id)}}>Xoa</button></li>

    )
}
export default TodoItem;