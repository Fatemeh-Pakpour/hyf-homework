import React , {Component} from 'react';

class NewTask extends Component {
    state = {
        value :" "
    }

    handleValueChange = (event)=>{
      this.setState({value : event.target.value})
    }
    
    handleSubmit = (event) =>{
      event.preventDefault();
      if (this.state.value === " "){
        alert("Please Enter Your Task to the List")
      }
      else{
        this.props.addNewTask(this.state.value);
        this.setState({value : " "});
      }
    }
  
   
    
    render(){
      console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange ={this.handleValueChange} />
              <input type="submit" value="Add " />
            </form>
          );
        
    }
    
    


      }

      


export default NewTask;
