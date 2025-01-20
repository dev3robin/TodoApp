import { useState } from "react"

function TodoInput(props){
      const {addTasks}=props
      const [inputVal, setInputVal]=useState('')
      function handleClick(){
            if (!inputVal) {return}
            addTasks(inputVal)
            setInputVal('')
      }
      function handleChange(e){
            const val=e.target.value
            setInputVal(val)
      }
      return (
            <div className="input_container">
                  <input
                        value={inputVal}
                        onChange={handleChange}
                        type="text"
                        placeholder="Add task"
                  />
                  <button onClick={handleClick}><span><i class="fa-solid fa-plus"></i></span></button>
            </div>
      )
}

export default TodoInput