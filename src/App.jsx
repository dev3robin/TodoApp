import React, { useEffect, useState } from 'react'
import Headers from './components/header'
import Tabs from './components/tabs'
import TodoInput from './components/todoInput'
import './App.css'
import TodoList from './components/todoList'
function App() {
  const [selectedTab, setSelectedTab]=useState('Open')
  const [tasks, setTasks]=useState([])
  function addTasks(newTask){
    let newTasks=[...tasks, { input: newTask,complete: false }]
    setTasks(newTasks)
    saveTasks(newTasks)
  }
  function deleteTasks(index){
    let filterdTasks = tasks.filter((val, valIndex) =>{
      return valIndex !== index
    })
    setTasks(filterdTasks)
    saveTasks(filterdTasks)
  }
  function editTasks(index){
    let newTasksList=[...tasks]
    let completedTodo=tasks[index]
    completedTodo['complete']= true
    newTasksList[index]=completedTodo
    setTasks(newTasksList)
    saveTasks(newTasksList)

  }
  function saveTasks(currTasks){
    localStorage.setItem('todo-app',JSON.stringify({tasks: currTasks}))
  }
  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){return}
    let db =JSON.parse(localStorage.getItem('todo-app'))
    setTasks(db.tasks)
  }, [])

  return (
    <div className='App'>
      <Headers tasks={tasks}/>
      <Tabs 
        tasks={tasks}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}  
      />
      <TodoInput addTasks={addTasks}/>
      <TodoList 
        editTasks={editTasks}
        deleteTasks={deleteTasks} 
        tasks={tasks}
        selectedTab={selectedTab}
      />
    </div>
  )
}

export default App
