import React from "react";

export default function WeatherIcons({data}) {


let eindelijk = data.current.weather[0].id;

   if (eindelijk >= 200 && eindelijk <= 233 ){   
    eindelijk = "🌩";
    } else if (eindelijk >= 300 && eindelijk <= 322 ){   
      eindelijk = "💧";
    } else if (eindelijk >= 500 && eindelijk <= 532){   
      eindelijk = "💧" ;
    } else if (eindelijk >= 600 && eindelijk <= 623 ){   
      eindelijk = "⛄";
    } else if (eindelijk >= 701 && eindelijk <= 782 ){   
      eindelijk = "🌫";
    } else if (eindelijk === 800 ){   
      eindelijk = "🌈";
    } else if (eindelijk >= 801 && eindelijk <= 805 ){   
      eindelijk = "☁" ;
    };
  
//     document.getElementById("changeIcon").innerHTML = eindelijk;

    return (
        <div>
           {/* <p id="changeIcon"></p> */}
           <p className="pictures">{(eindelijk)}</p>
        </div>
    )
}
