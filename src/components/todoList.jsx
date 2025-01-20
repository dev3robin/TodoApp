import TodoCard from "./todoCard"
function TodoList(props){
      const {tasks, deleteTasks,editTasks,selectedTab}=props
      const filterTodoList= selectedTab === "All" ?
            tasks:
            selectedTab ==='Completed' ?
                  tasks.filter(val => val.complete):
            tasks.filter(val => !val.complete)
      return (
            <div className="card-container">
                  {filterTodoList.map((task, todoIndex) => {
                        return (
                              <TodoCard 
                                    key={todoIndex}
                                    todoIndex={todoIndex}
                                    task={task}   
                                    deleteTasks={deleteTasks} 
                                    editTasks={editTasks}

                              />

                        )
                  })}
            </div>
      )
}

export default TodoList