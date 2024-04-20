import { useState } from "react";

export default function Form({ onAddHabit }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newHabit = { description, isHabit: false, count: 0, id: Date.now() };
    onAddHabit(newHabit);
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
