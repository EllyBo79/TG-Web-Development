
import React, { useState } from 'react';

// const mystyle = {
//   color: "white",
//   backgroundColor: "darkgrey",
//   paddingLeft: "100px",
//   fontFamily: "lobster",
//   width:"400px",
//   marginLeft:"100px",
//   border:"5px solid hotpink"
// };
// const styleInput = {
//   color: "white",
//   backgroundColor: "darkgrey",
//   marginLeft: "100px",
//   paddingLeft:"40px",
//   marginTop: "60px",
//   fontSize: "20px",
//   width:"75px",
//   border:"5px solid hotpink",
//   fontFamily: "lobster",

// };

// opdracht2
// function FunctionalComponent(props) {
//   const [firstName, setFirstName] = useState('');
  
//   return (
//     <form >
      
//     <h1 >2.Hello Function {props.text}</h1>
//     </form>
//   );
// }

// opdracht1
function FunctionalComponent(props) {
  
  return (
    <form >
      
    <h1>2.Hello Function {props.text}</h1>
    </form>
  );
}




// function FunctionalComponent() {
//   const [Text, setText] = useState('TG');

//   return (
//         <div>      
          
//           <form>
//             <input
//               type='text'
//               onChange={Text}
//             />
//             <h1>Hello Function {Text}</h1>
//           </form>        
//         </div>
//   );
// }

// function FunctionalComponent ()  {
//   const [what, setWhat] = useState('Learning functonal components');
//   const [whatColor, setwhatColor] = useState('Everything green is functional.')
//   return  <div>
//               <h3 >What am I doing?</h3>
//               <p style={{color:'green'}} >{what}</p>
//               <h3>What color is functional?</h3>
//               <p style={{color:'green'}} >{whatColor}</p>

//           </div>
// }
  export default FunctionalComponent