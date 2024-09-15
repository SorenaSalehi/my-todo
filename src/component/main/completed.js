export default function CompletedTask({completedTask}){

   
    return (
        <ul className="todo-list">
           {completedTask.map(task=> <li key={task.id}><p>{task.day}</p><h3><span>{task.title} Completed ✅ </span></h3></li>)}
        </ul>
    )
}