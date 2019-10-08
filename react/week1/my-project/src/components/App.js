import React, { Component } from "react";
import Header from "./Header";
import Task from "./Task";
import NewTask from "./NewTask";


class App extends Component {
  state = {
    tasks: [
      {
        title: "do laundry",
        id: 1
      },
      {
        title: "do homework",
        id: 2
      },
      {
        title: "play tennis",
        id: 3
      }
    ]
  };

  // task id counter
  prevTaskId = 3;

  handleAddNewTask = title => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title,
          id: (this.prevTaskId += 1)
        }
      ]
    });
  };

 

handleRemoveTask = (id)=>{
  this.setState(
    prevState => ({
      tasks : prevState.tasks.filter(task => task.id !== id)
    })
  )
}
  render() {
    return (
      <div className="todo-ist">
        <Header 
        title="To do list" 
        totalTask={this.state.tasks.length} />
        <div className ="tasks-container">

        {this.state.tasks.map(task => (
          <Task 
          taskTitle={task.title} 
          id={task.id} 
          key={task.id.toString()} 
          removeTask = {this.handleRemoveTask}  
          />
        ))}
        </div>

        <NewTask addNewTask={this.handleAddNewTask} />
      </div>
    );
  }
}

export default App;
