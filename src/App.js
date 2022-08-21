import React, { Component } from "react";
import Jumbotron from "./Components/Jumbotron";
import NewTodo from "./Components/NewTodo";
import TodoList from "./Components/TodoList";
import "./App.css";

class App extends Component {

    state = {
            todos: [
                // {
                //     id: 1,
                //     msg: "Learn React",
                //     done: true
                // },
                // {
                //     id: 2,
                //     msg: "Learn Node",
                //     done: false
                // },
                // {
                //     id: 3,
                //     msg: "Learn Vue",
                //     done: false
                // },
                // {
                //     id: 4,
                //     msg: "Learn Angular",
                //     done: false
                // }
            ]
    }

    componentDidMount() {
        let data = [];
        if(localStorage.data) {
            data = JSON.parse(localStorage.data);
        }
        this.setState({
            todos: data
        })
    }

    // componentDidUpdate() {
    //     console.log("Update")
    // }

    addIntoTodos = (todo) => {
        todo.id = Math.floor(Math.random() * (10000 -10) -10);
        localStorage.data = JSON.stringify([...this.state.todos,todo]);
        this.setState({todos:[...this.state.todos,todo]})
    }

    markTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done;
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos}) 
    }

    deleteTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index,1)
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos})
    }


    render() {
        return(
            <div className="wrapp">
                <Jumbotron/>
                <NewTodo  addIntoTodos={this.addIntoTodos}/>
                <TodoList todos={this.state.todos} markTodo={this.markTodo} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default App;