import Navbar from "./navbar";
import MainSection from "./mainSection";
import TodoList from "./todoList";
import CompletedTask from "./completed";
// import { useState } from "react";
export default function Main({

  onAddTask,

  addTask,
  setAddTask,

  todayTask,
  completedTask,

  taskTitle,
  taskDay,
  setTaskDay,
  setTaskTitle,
  
  showTodoList,
  showCompleted,
  setShowTodoList,
  setShowCompleted,

  isCompleted,
  setIsCompleted,
  
  onSubmit,
  onCompleted,
  
}) {


  

  return (
    <main>
      <Navbar onAddTask={onAddTask} onHideForm={setAddTask}/>
      {addTask && (
        <MainSection
          todayTask={todayTask}
          taskTitle={taskTitle}
          taskDay={taskDay}
          setTaskTitle={setTaskTitle}
          setTaskDay={setTaskDay}
          onSubmit={onSubmit}
          onAddTask={onAddTask}
        />
      )}
      {showTodoList && <TodoList
        todayTask={todayTask}
        showTodoList={showTodoList}
        onCompleted={onCompleted}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
        
      />}
      {showCompleted && <CompletedTask completedTask={completedTask}/>}
    </main>
  );
}
