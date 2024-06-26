import Habit from "./Habit";

export default function HabitsList({
  habits,
  onDeleteHabit,
  onIncrementHabit,

  onReset,
}) {
  return (
    <div className="habit-list">
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onDeleteHabit={onDeleteHabit}
            onIncrementHabit={onIncrementHabit}
          />
        ))}
      </ul>
      <button className="reset" onClick={onReset}>
        Clear All
      </button>
    </div>
  );
}
