import Habit from "./Habit";

export default function HabitsList({ habits, onDeleteHabit }) {
  return (
    <div className="habit-list">
      <ul>
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} onDeleteHabit={onDeleteHabit} />
        ))}
      </ul>
    </div>
  );
}
