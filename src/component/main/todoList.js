export default function TodoList({ todayTask,showTodoList,onCompleted, isCompleted,
    setIsCompleted,
     }) {
  return (
    <ul className="todo-list">
      {showTodoList && todayTask.map((task) => 
        
        <li key={task.id}>
          <p>{task.day}</p>
          <h3>{task.title}</h3>
          <input type="checkbox" className="checkbox" onClick={()=>onCompleted(task)}/>
        </li>
      )}
    </ul>
  );
}
