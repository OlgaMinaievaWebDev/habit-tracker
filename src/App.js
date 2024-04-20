import Header from "./Header";
import Form from "./Form";
import { useState } from "react";

export default function App() {
  const [habits, setHabits] = useState([]);

  function handleAddHabits(habit) {
    setHabits((habits) => [...habits, habit]);
  }
  return (
    <div className="container">
      <Header />
      <Form onAddHabit={handleAddHabits} />
    </div>
  );
}
