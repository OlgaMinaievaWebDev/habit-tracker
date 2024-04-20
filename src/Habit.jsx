export default function Habit({ habit, onDeleteHabit, onIncrementHabit }) {
  return (
    <li>
      <span>{habit.description}</span>

      <button onClick={() => onIncrementHabit(habit.id)}>{habit.count}</button>

      <button onClick={() => onDeleteHabit(habit.id)}>✅</button>
    </li>
  );
}
