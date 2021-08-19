import React from 'react'
// import React, { useEffect, useState} from "react";

export default function TextExtra({data}) {
 

let text = data.current.temp ;

if (text >= 1 && text <= 10){
   text = "Brrrrrr";
} else if (text >= 10 && text <= 15 ){
   text = "Still cold";
} else if (text >= 15 && text <= 20 ){
   text = "Not Warm Enough!";
} else if (text >= 20 && text <= 25 ){
   text = "This feels better";
} else if (text >= 25 && text <= 30 ){
   text ="Starting to Sweat now!";
} else if (text >= 30 && text <= 35 ){
   text ="This is Hot Enough";
} else if (text >= 35 && text <= 40 ){
   text = "Heatwave!!!";
}

    return (
        <div>
         <p className="moreText">{(text)}</p>
        </div>
    )
}
