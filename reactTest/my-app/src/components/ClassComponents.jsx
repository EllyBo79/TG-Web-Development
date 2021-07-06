import React from 'react'



class ClassComponents extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    changeName = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form>
        <input
          type='text'
          onChange={this.changeName}
        />
        <h1>Hello Class {this.state.username}</h1>
        </form>
      );
    }
  }


// class ClassComponents extends React.Component {
//     constructor(props) {
//         super (props);
//         this.state ={
//             learningWhat:"What a class component is.",
//             where:"I am working from home.",
//             whichOne:"Everything red is made with a class component."
//         };
//     }

//     render(){
//     return      <div>
//                     <h3 style={{color: "red"}} >What am I learning today?</h3> {this.state.learningWhat}
//                     <h3 style={{color: "red"}}>Where are you located?</h3>{this.state.where}
//                     <h3 style={{color: "red"}}>How do Recognize any of this?</h3>{this.state.whichOne}

//                 </div>
                  
//     }
//   }


export default  ClassComponents 


   

   
        
    
