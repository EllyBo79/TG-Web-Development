import React from 'react';
// import React, { useEffect, useState} from "react";


// export default function StartButton() {
//     const api_key =  process.env.REACT_APP_KEY_ELLY;
//     const [data, setData] = useState();
//     console.log(data)
  
     
//   useEffect(() => {  
//        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=52.374&lon=4.8897&units=metric&appid=${api_key}`)
       
//         .then((response) => response.json())
//         .then((newData) =>  setData(newData))
//       }, [api_key])

//     function showMe() {
//         let foreCast = document.getElementById('myDiv');
//         foreCast.style.color = "black";

//       }
    
//     return (
//         <div>

//             <p id="myDiv" >{Math.round(data.current.temp)}</p>

//             <button onClick={showMe}>
//                 Click me!
//             </button>

//         </div>
//     )
// }
