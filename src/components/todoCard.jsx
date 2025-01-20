function TodoCard(props){
      const {task,deleteTasks,todoIndex,editTasks}=props
      function handleDeleteClick(){
            deleteTasks(todoIndex)
      }
      function handleEdit(){
            editTasks(todoIndex)
      }
      return (
            <>
                  <div className="card">
                        <div className="card-component">
                              <p>{task.input}</p>
                              <button className="card-btn do_btn"onClick={handleEdit} disabled={task.complete}>Done</button>
                              <button className="card-btn de_btn"onClick={handleDeleteClick}>Delete</button>
                        </div>
                  </div>
            </>
      )
}

export default TodoCard
