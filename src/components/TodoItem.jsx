function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "8px 0",
      }}
    >
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
