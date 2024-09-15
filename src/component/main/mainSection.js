// import { useState } from "react";
import  AddTodo  from "./AddTodo";

export default function MainSection({
  todayTask,
  taskTitle,
  taskDay,
  setTaskDay,
  setTaskTitle,
  onSubmit,
  onAddTask,
}) {
  return (
    <section>
      <h3>{taskDay}</h3>
      <AddTodo
        todayTask={todayTask}
        taskTitle={taskTitle}
        taskDay={taskDay}
        setTaskTitle={setTaskTitle}
        setTaskDay={setTaskDay}
        onSubmit={onSubmit}
        onAddTask={onAddTask}
      />
    </section>
  );
}


