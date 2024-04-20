export default function Habit({ habit, onDeleteHabit, onIncrementHabit }) {
  return (
    <li>
      <span>{habit.description}</span>
      <span>{habit.count}</span>

      <button onClick={() => onIncrementHabit(habit.id)}>➕</button>

      <button onClick={() => onDeleteHabit(habit.id)}>❌</button>
    </li>
  );
}
