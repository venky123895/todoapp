import React, { createContext , useState } from 'react'
import './todo.css'
import TodoItem from './TodoItem'
export const GlobalData=createContext();
const Todo = () => {
    const[data,setData]=useState("");
    const[todo,addToDo]=useState([]);



    var newItem={
        title:data,
        toggle:false
    }

    const deleteItem=(index)=>{
       var newData=todo.filter((ele,i)=>{
            return index !== i
        })
        
        addToDo(newData)
        
    }

  
    // const hancdleTick=(index)=>{
    //    var ticked = todo.map((ele,i)=>{

    //    })
    // }
 

    const handleToggle=(index)=>{
       var newArray=todo.map((ele,i)=>{
        return index === i ? {...ele ,toggle: !ele.toggle} : ele;
       })
       addToDo(newArray)
    }

    const handleUpdate=(index)=>{
        var arrayUpdate=todo.find((i)=>{
            return index === i 
        })
        addToDo(arrayUpdate)
    }
    
    
  return (
    <GlobalData.Provider value={{todo,handleToggle,deleteItem,handleUpdate}}>
    <div style={{
        textAlign:"center",
        padding:"25px"
    }}>
        <h2 className='text'>ToDo Example</h2>
        <input type='text' value={data} placeholder='Enter the text' className='inp' onChange={(e)=>{
            setData(e.target.value)
        }} />
        <button className='but' onClick={()=>{
            addToDo([...todo,newItem])
        }}><i class="fa-solid fa-circle-plus"></i></button> 
       
        
        <TodoItem/>
    </div>
    </GlobalData.Provider>
  )
}

export default Todo