function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li>
      <span
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
