import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text, time);
    setText("");
    setTime("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter a time..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
