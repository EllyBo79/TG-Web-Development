// import ClassComponents from "./components/ClassComponents";
// import FunctionalComponent from "./components/FunctionalComponent";
// import React, {Component} from 'react';
// import React, { useState } from "react";
// import React, { useState, memo, useEffect } from 'react';
// import React from 'react';
import React, { useEffect} from "react";

  // const api = {
  //   key: `http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=5401256b809d2d8020bf0d7e076716e8&units=metric`,
  //   base: "http://api.openweathermap.org/data/2.5/"
  // }


function App() {
// const [query, setQuery] = useState('');
// const [weather, setWeather] = useState({});

  
useEffect(() => {
  
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=5401256b809d2d8020bf0d7e076716e8&units=metric`)
  .then(response => response.json())
  .then(data => console.log(data));
  // return `${data}`;
}, [])

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  "sunday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  
  return `${day} ${date} ${month} ${year}`
  };
   
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Amsterdam</div> 
          <div className="date">{dateBuilder(new Date())}</div>         
        </div>
        <div className="weather-box">
          <div className="temp">
          {/* <p>Temprature: {main.temp}</p> */}
              25 °C
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
  }

export default App;




























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











