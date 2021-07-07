
// opdracht2
// import React from 'react'


// const inputStyle = {
//   backgroundColor:"pink",
//   border:"5px solid aqua",
//   marginLeft: "100px",
//   paddingLeft:"40px",
//   fontSize: "20px",
//   width:"75px",
//   fontFamily: "lobster",
//   color:"grey",
//   marginTop:"40px"
// }
// const myStyle = {
//   backgroundColor:"pink",
//   border:"5px solid aqua",
//   marginLeft: "100px",
//   paddingLeft:"40px",
//   paddingTop:"10px",
//   fontSize: "30px",
//   width:"450px",
//   fontFamily: "lobster",
//   height:"40px",
//   color:"grey"
// }
// class ClassComponents extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' };
//     }
//     changeName = (event) => {
//       this.setState({username: event.target.value});
//     }
//     render() {
//       return (
//         <form>
//           <input type="text" />
//           <h1>1-Hello Class</h1>
//           <input style={inputStyle}type='text'onChange={this.changeName}
//         />
//         <h1 style={myStyle}>2.Hello Class {this.state.username}</h1>
//         </form>
//       );
//     }
  // }
// export default  ClassComponents 


  // opdracht1
  import React, { Component } from 'react'
  
  export default class ClassComponents extends Component {
    render() {
      return (
        <div>
          <h1>2.Hello Class { this.props.name }</h1>
        </div>
      )
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




   

   
        
    
