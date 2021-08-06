import React from 'react'
// import React, { useEffect, useState} from "react";

export default function TempMain({data}) {
  
  return (
    
    <div>
            <div>Temp: {Math.round(data.daily[0].temp.day)}°C</div>
            <div>Temp-max: {Math.round(data.daily[0].temp.max)}°C</div>
            <div>Temp-min: {Math.round(data.daily[0].temp.min)}°C</div>
            <div>Humidity: {Math.round(data.daily[0].humidity)}%</div>    
    </div>
  )
}








// export default function TempMain() {
//   return (
//           <div>
//             <div>Temp: {Math.round(data.daily[0].temp.day)}°C</div>
//             <div>Temp-max: {Math.round(data.daily[0].temp.max)}°C</div>
//             <div>Temp-min: {Math.round(data.daily[0].temp.min)}°C</div>
//             <div>Humidity: {Math.round(data.daily[0].humidity)}%</div>    
//           </div>
//   )
// }

