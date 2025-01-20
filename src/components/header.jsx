import React from "react"
function Headers(props){
      const {tasks}=props
      const len=tasks.length
      const tasksOrTask=len !=1 ? "Tasks" :"Task"
      return (
            <>
                  <header><h1>You have {len} Open {tasksOrTask}</h1></header>
            
            </>
      )
}

export default Headers