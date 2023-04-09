import React, { useContext, useState } from 'react'
import { GlobalData } from './Todo'
import './todoItem.css'
const TodoItem = () => {
  const{todo,deleteItem,handleToggle,handleUpdate}=useContext(GlobalData)
  const[editToggle,setEditToggle]=useState(false)


  return (
   
    <div>
      
       {
        
        todo.map((ele,index)=>{
            return (
              <>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:"25px",
                    gap:"20px"
                }}>
                <input type='checkbox'  onClick={()=>{
                    handleToggle(index)
                }} />
                <h4 style={{ textDecoration: ele.toggle ? "line-through" : "none" }}>{ele.title}</h4>
                <h5 style={{color:"red"}}>{ele.toggle ? "Completed" : "Pending"}</h5>
                
                <button onClick={(e)=>{
                    
                }}><i class="fa-solid fa-pen-to-square"></i></button>
                <button  onClick={()=>{
                  deleteItem(index);
                }}><i class="fa-solid fa-trash"></i></button>
                </div>
                </>
            )
          
        })
       }
    </div>
  )
}

export default TodoItem