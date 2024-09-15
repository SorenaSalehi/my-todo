//main navbar
export default function Navbar({ onAddTask }) {
  return (
    <nav className="main-nav">
      todo
      <span>
        {" "}
        <AddTask onAddTask={onAddTask} />
      </span>
    </nav>
  );
}

//add task button
function AddTask({ onAddTask }) {
  return <button onClick={() => onAddTask()}>Add task</button>;
}

