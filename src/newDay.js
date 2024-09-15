import { useState } from "react";
import Sidebar from "./component/side/sidebar";
import Main from "./component/main/main";

let todayTask = [];
let completedTask = [];
export default function NewDay() {
  const [addTask, setAddTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDay, setTaskDay] = useState("Sunday");
  const [showTodoList, setShowTodoList] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [logOut, setLogOut] = useState(true);
  console.log(isCompleted);
  //handle add todo form
  function handleSubmit(e) {
    e.preventDefault();
    if (!taskTitle) return;
    const id = crypto.randomUUID();
    todayTask = [
      ...todayTask,
      { id, title: taskTitle, day: taskDay, completed: false },
    ];
    console.log(todayTask);

    //set default
    setAddTask(false);
    setShowTodoList(true);
    setTaskTitle("");
    setTaskDay("Sunday");
  }

  //add task handler
  function handleAddTask() {
    //display the form
    setAddTask(!addTask);
    //hide the lists
    setShowTodoList(false);
    setShowCompleted(false);
  }

  //show todo list handler
  function handleShowTodoList() {
    //display or hide
    setShowTodoList(!showTodoList);
    //hide add form
    setAddTask(false);
    //hide completed list
    setShowCompleted(false);
  }

  //task completed handler
  function handleCompleted(task) {
    //filter completed
    todayTask = todayTask.filter((todayTask) => todayTask.id !== task.id);
    //create new object
    completedTask = [
      ...completedTask,
      { id: task.id, title: task.title, day: task.day, completed: true },
    ];
    //display alert
    alert(`Awesome you completed ${task.day}'s (${task.title}) 😍😍`);
    //hide todo list
    setShowTodoList(false);
    //display completed list
    setShowCompleted(true);
  }

  //show completed handler
  function handleShowCompleted() {
    //display or hide completed list
    setShowCompleted(!showCompleted);
    //hide add form
    setAddTask(false);
    //hide todo list
    setShowTodoList(false);
  }

  //handle log out
  function handleLogOut() {
    setLogOut(!logOut);
  }

  //handle start new day
  function handleNewDay() {
    //reset to default
    todayTask = [];
    completedTask = [];
    setLogOut(false);
  }

  return (
    <>
      {/* log out message */}
      {logOut ? (
        <div className="log-out-message">
          {completedTask.length > 0 ? (
            <>
              <h3>Congratulation 😍😍</h3>
              <h2>You Completed {completedTask.length} Task</h2>{" "}
            </>
          ) : (
            <h3>Be Ready , for Your New Day</h3>
          )}
          <button onClick={() => handleNewDay()}>Start Your Day 😃😃</button>
        </div>
      ) : (
        <div className="new-day">
          <Sidebar
            onClickTodo={handleShowTodoList}
            onclickCompleted={handleShowCompleted}
            todayTask={todayTask}
            onLogOut={handleLogOut}
          />
          <Main
            //add or close task form
            onAddTask={handleAddTask}
            // add task
            addTask={addTask}
            setAddTask={setAddTask}
            // today and completed task
            todayTask={todayTask}
            completedTask={completedTask}
            // new task
            taskTitle={taskTitle}
            taskDay={taskDay}
            setTaskTitle={setTaskTitle}
            setTaskDay={setTaskDay}
            onSubmit={handleSubmit}
            //display todo list
            showTodoList={showTodoList}
            setShowTodoList={setShowTodoList}
            //set completed task
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
            //display completed task
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
            onCompleted={handleCompleted}
            // isCompleted={isCompleted}
            // setIsCompleted={setIsCompleted}
          />
        </div>
      )}
    </>
  );
}
