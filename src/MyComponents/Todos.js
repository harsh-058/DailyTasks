import React from 'react'
import {Todoitem} from "./Todoitem";
export const Todos = (props) => {
    let mystyle= {
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={mystyle}>
            <h3 className="text-center my-3">Daily list</h3>
            {props.todos.length===0?" No todos to display":
            props.todos.map((todo)=>{
                console.log(todo.sno);
        return(<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })}
           
        </div>
    )
}
