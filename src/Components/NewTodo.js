import React, { Component } from "react";


class newTodo extends Component {

    state = {
        msg: "",
        done : false
    }

    setNewMsg = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    addTodo = () => {
        this.props.addIntoTodos(this.state)
        this.setState({msg:""})
    }

    render() {
        return(
            <div className="container">
                <div className="row m-5">
                    <div className="col-md-8 offset-2">
                        <input type="text" className="form-control" placeholder="New message" onChange={this.setNewMsg} value={this.state.msg} /><br />
                        <div className="input-group-append">
                        <button onClick={this.addTodo} type="text" className="btn btn-outline-primary form-control">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default newTodo;