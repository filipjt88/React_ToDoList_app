import React from "react";

const Todo = ({todo,markTodo,index,deleteTodo}) => {
    return(
        <div className="col-md-4 p-3">
            <div className="card text-center">
                <div className="card-header">
                    <h5>Todo:{todo.id}</h5>
                </div>
                <div className="card-body">
                    <h5 className={todo.done ? 'complete' : "incomplete"}>{todo.msg}</h5>
                </div>
                <div className="card-footer">
                    <button onClick={()=> {deleteTodo(index)}} className="btn btn-danger float-left">Delete</button>
                    <button onClick={()=> {markTodo(index)}} className="btn btn-warning float-right">Mark</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;