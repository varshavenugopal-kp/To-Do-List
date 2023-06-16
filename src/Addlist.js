import React from 'react'
import './App.css'
import { useState } from 'react';
function Addlist() {
    const [toDos,setTodos]=useState([])
    const [toDo,setTodo]=useState('')
    const reg = /^[^\s][\w\W]+$/gm;

   
    return (
    <div>
      <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's a nice day 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{
        if(toDos.some(data=>data.text.includes(toDo))){
           
        }else if(!reg.test(toDo)){

        }
         
        else{
            setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])
        }
        }} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {
        toDos.map((obj)=>{
          return(
            <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                  console.log(e.target.checked);
                  console.log(obj)
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                        obj2.status=e.target.checked
                    }
                    return obj2
                  }))
              }} obj={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() =>setTodos(toDos.filter(data=>data.id!==obj.id))} className="fas fa-times"></i>
            </div>
          </div>
          )
        })
      }
     {toDos.map((obj)=>{
        if(obj.status){
            return(<h1>{obj.text}</h1>)
        }
        return null
     })}
    </div>
  </div>
    </div>
  );
}

export default Addlist
