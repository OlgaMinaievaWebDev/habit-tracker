import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import HabitsList from "./HabitsList";

export default function App() {
  const [habits, setHabits] = useState([]);

  function handleAddHabits(habit) {
    setHabits((habits) => [...habits, habit]);
  }

  function handleIncrementHabit(id) {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.id === id) {
          return { ...habit, count: habit.count + 1 };
        }
        return habit;
      })
    );
  }

  function handleDeleteHabit(id) {
    setHabits((habits) => habits.filter((habit) => habit.id !== id));
  }

  function handleResetAll() {
    setHabits([]);
  }

  return (
    <div className="container">
      <Header />
      <Form onAddHabit={handleAddHabits} />
      <HabitsList
        habits={habits}
        onDeleteHabit={handleDeleteHabit}
        onIncrementHabit={handleIncrementHabit}
        onReset={handleResetAll}
      />
    </div>
  );
}
