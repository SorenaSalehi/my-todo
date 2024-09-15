// import { useState } from "react";

export default function AddTodo({
  todayTask,
  taskTitle,
  taskDay,
  setTaskDay,
  setTaskTitle,
  onSubmit,
  onAddTask
}) {
  return (
    <div className="form">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="your task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        ></input>
        <SelectDay taskDay={taskDay} setTaskDay={setTaskDay} />
        <button>✅</button>
      </form>
      <button className="close-btn" onClick={()=>onAddTask()}>❌</button>
    </div>
  );
}

function SelectDay({ taskDay, setTaskDay }) {
  return (
    <select value={taskDay} onChange={(e) => setTaskDay(e.target.value)}>
      <option value={"Sunday"}>Sunday</option>
      <option value={"Monday"}>Monday</option>
      <option value={"Tuesday"}>Tuesday</option>
      <option value={"Wednesday"}>Wednesday</option>
      <option value={"Thursday"}>Thursday</option>
      <option value={"Friday"}>Friday</option>
      <option value={"Saturday"}>Saturday</option>
    </select>
  );
}
