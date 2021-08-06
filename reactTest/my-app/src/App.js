// import React, {Component} from 'react';
// import React, { useState } from "react";
// import React from 'react';
import React, { useEffect, useState} from "react";
import moment from "moment";
// import NextPage from "./components/NextPage";
// import Days from "./components/Days";
// import TempMain from "./components/TempMain"
// import TextExtra from "./components/TextExtra";
// import Month from "./components/Month";
import Mother from "./components/Mother";
import Clouds from "./components/Clouds";
import Accordion from "./components/Accordion";
  
export default function App() {   


const api_key =  process.env.REACT_APP_KEY_ELLY;
const [data, setData] = useState();
console.log(api_key)
console.log(data)
console.log(new Date().getDate()+1)
     
useEffect(() => {  
     fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=52.374&lon=4.8897&units=metric&appid=${api_key}`)
     
      .then((response) => response.json())
      .then((newData) =>  setData(newData))
    }, [api_key]) 

  
    if (!data) {
      console.log("eerst niks")
      return null
    }
    console.log ("iets");

 
  return (
<div>
    <div className="app ">
      <main>
        <div className="location-box">                
          <div className="location">Amsterdam</div>
          <div className="icons">
          <Clouds data={data}/>
          {moment().format("ll")}
          </div> 
        </div>
        
        <div className="weather-box">
          <div className="temp">
          <Mother data={data}/>
          </div>   
           <p className="time">{moment().format("h:mm")}</p>
       </div>

      </main>

    </div> 
    <Accordion data={data}/>    
    </div>
  );
};





























// lists and keys

// const names = [];

// export default function App() {
//   const [ids, setIds] = useState(['one', 'two', 'three']);


//   const handleAdd = () => {
//     setIds([ids, ...ids]);
//   }

//   return (
//       <div>
//         <input value={ids} onChange={handleAdd}></input>
//       <div >

//         <div >
//           <h4 >{'key={id}'}</h4>

//           {ids.map((id) => <ListItem key={id} id={id}
//                                      passedKey='id'/>)}
//         </div>

//       </div>
//     </div>
//   )
// }

// const ListItem = memo(({ passedKey, id }) => {
//   const [name] = useState(names[id]);

//   useEffect(() => {
//     console.log(passedKey, id, name);
//   });

//   return (
//     <div>
//       {id} - {name}
//     </div>
//   );
// });

/* //   return (
//     <div className="App">
//       <input id="input"/>
//       <button onClick={handleInput}>Submit List Item</button>
//       {names.map(name => <div className="">{name}</div>)}
//     </div>
//   )
// } */

// export default App;













// opdracht 3
// function App() {

//   const [name, setName] = useState("React")
//   const handleInput = (event) => {
//     setName(event.target.value)
//     console.log(event.target.value);

//   }
     
//   return (
//       <div>
//           <FunctionalComponent text ={name}   />
//           <input value={name} onChange={handleInput}></input>

//           <ClassComponents text ={name} /> 
//          <input value={name} onChange={handleInput}></input>

//       </div>
//   );
// }
// export default App;


// opdracht1 
// function App() {

//   const [name, setName] = useState("React")
//   const handleInput = (event) => {
//     setName(event.target.value)
//     console.log(event.target.value);

//   }
     
//   return (
//       <div>
//           <FunctionalComponent text ={name}   />
//           <ClassComponents text ={name} /> 
//          <input value={name} onChange={handleInput}></input>
//          <input value={name} onChange={handleInput}></input>

//       </div>
//   );
// }
// export default App;

// opdracht2
// function App() {

//    return (
//     <div className="App" >
      
//      <FunctionalComponent />

//      <ClassComponents/>
//     </div>
    
//   );
// }
   

// export default App;











