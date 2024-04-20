import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import HabitsList from "./HabitsList";

export default function App() {
  const [habits, setHabits] = useState([]);

  function handleAddHabits(habit) {
    setHabits((habits) => [...habits, habit]);
  }

  function handleDeleteHabit(id) {
    setHabits((habits) => habits.filter((habit) => habit.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <Form onAddHabit={handleAddHabits} />
      <HabitsList habits={habits} onDeleteHabit={handleDeleteHabit} />
    </div>
  );
}
