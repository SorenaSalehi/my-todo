// import SideList from "./sideList";

export default function Sidebar({todayTask,onClickTodo,onclickCompleted,onLogOut}) {
  return (
    <aside className="sidebar">
      <div className="list">
        <header className="todo-logo">
          <img src="logo.png" alt="logo"></img>TODO
        </header>
        <SideList onClickTodo={onClickTodo} onclickCompleted={onclickCompleted} todayTask={todayTask}/>
      </div>
      <footer className="log-out" onClick={()=>onLogOut()}>Log Out</footer>
    </aside>
  );
}
 function SideList({onClickTodo,onclickCompleted}){
  return <ul>
    <li onClick={() => onClickTodo()}>TODO</li>
    <li onClick={()=> onclickCompleted()}>Completed Task</li>
  </ul>
 }