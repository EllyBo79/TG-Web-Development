import ClassComponents from "./components/ClassComponents";
import FunctionalComponent from "./components/FunctionalComponent";
import {useState} from 'react';

// opdracht1
function App() {

  const [name, setName] = useState("React")
  const handleInput = (event) => {
    setName(event.target.value)
    console.log(event.target.value);

  }
     
  return (
      <div>
          <FunctionalComponent text ={name}   />
         <ClassComponents name ={name} /> 

         <input value={name} onChange={handleInput}></input>

      </div>
  );
}
// opdracht2
  //  return (
  //   <div className="App" >
      
  //     <input />
  //    <FunctionalComponent />

  //    <ClassComponents/>
  //   </div>
    
  // );


export default App;




