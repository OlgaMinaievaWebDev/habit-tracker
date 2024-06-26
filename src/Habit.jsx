export default function Habit({ habit, onDeleteHabit, onIncrementHabit }) {
  return (
    <>
      {habit.count < 21 && (
        <li>
          <span>{habit.description} </span>
          <span>
            {habit.count} day{habit.count > 1 ? "s" : ""}
          </span>

          <button onClick={() => onIncrementHabit(habit.id)}>➕</button>
          <button onClick={() => onDeleteHabit(habit.id)}>❌</button>
        </li>
      )}
    </>
  );
}
