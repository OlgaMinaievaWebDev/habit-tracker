export default function Habit({ habit, onDeleteHabit }) {
  return (
    <li>
      <span>{habit.description}</span>
      <button onClick={() => onDeleteHabit(habit.id)}>✅</button>
    </li>
  );
}
