import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  //  初始化时从 localStorage 读取
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
  //  监听 todos 变化并存储
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
