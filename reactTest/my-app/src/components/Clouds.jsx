import React from "react";
import TextExtra from "./TextExtra";
import WeatherIcons from "./WeatherIcons";
import Days from "./Days";


   
export default function Clouds({data}) {
        
       
       return (
           <div>
             <WeatherIcons data={data}/>
             <TextExtra data={data}/>
             <Days  data={data}/>
           </div>
       )
     };
