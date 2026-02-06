import React, { useCallback, useState } from "react";

const TodoItem = React.memo(({todo,onToggle,onDelete})=>{
    return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
    )
})
    function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const onToggle = useCallback((id) => {
    setTodos(todos =>
      todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }, []);

  const onDelete = useCallback((id) => {
    setTodos(todos => todos.filter(t => t.id !== id));
  }, []);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoApp;