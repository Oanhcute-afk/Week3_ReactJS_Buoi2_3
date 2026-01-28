import TodoItem from "./TodoItem";
function TodoList({todos, deleteTodo}){
    if(todos.length === 0){
        return <p>Khong co cong viec</p>
    }
    return(
        <ul>
            {todos.map(item => (
                <TodoItem key={item.id} todo={item} deleteToDo={deleteTodo}/>
            ))}
        </ul>
    )
}
export default TodoList;