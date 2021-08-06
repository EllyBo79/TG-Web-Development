// import React from "react";
import React, { useEffect, useState} from "react";
import moment from "moment";
import Days from "./Days";


function NextPage(props) { 

  const api_key =  process.env.REACT_APP_KEY_ELLY;
  const [data, setData] = useState();
  console.log(data)

   
useEffect(() => {  
     fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=52.374&lon=4.8897&units=metric&appid=${api_key}`)
     
      .then((response) => response.json())
      .then((newData) =>  setData(newData))
    }, [api_key]) 
   

    const button = document.querySelector('button');
    const paragraph = document.querySelector('.forecast');


    const day1 = document.querySelector('.day1');
    const day2 = document.querySelector('.day2');
    const day3 = document.querySelector('.day3');
    const day4 = document.querySelector('.day4');
    const day5 = document.querySelector('.day5');
    const day6 = document.querySelector('.day6');
    const day7 = document.querySelector('.day7');


    // button.addEventListener('click', updateButton);

    
    // function updateButton() {
    //   if (button.value === 'Start') {
    //     paragraph.textContent = 'Here it is!';
          
     
    //     day1.textContent = "Morn" + " " + data.daily[0].temp.morn + "°C" + " " + "Day" + data.daily[0].temp.day + "°C" +  " " + "Eve" + data.daily[0].temp.eve + "°C" +  " " + "Night" + data.daily[0].temp.night + "°C";
    //     day2.textContent = "Morn" + " " +  data.daily[1].temp.morn + "°C" + " " + "Day" + data.daily[1].temp.day + "°C" +  " " + "Eve" + data.daily[1].temp.eve + "°C" +  " " + "Night" + data.daily[1].temp.night + "°C";
    //     day3.textContent = "Morn" + " " +  data.daily[2].temp.morn + "°C" + " " + "Day" + data.daily[2].temp.day + "°C" +  " " + "Eve" + data.daily[2].temp.eve + "°C" +  " " + "Night" + data.daily[2].temp.night + "°C";
    //     day4.textContent = "Morn" + " " +  data.daily[3].temp.morn + "°C" + " " + "Day" + data.daily[3].temp.day + "°C" +  " " + "Eve" + data.daily[3].temp.eve + "°C" +  " " + "Night" + data.daily[3].temp.night + "°C";
    //     day5.textContent = "Morn" + " " +  data.daily[4].temp.morn + "°C" + " " + "Day" + data.daily[4].temp.day + "°C" +  " " + "Eve" + data.daily[4].temp.eve + "°C" +  " " + "Night" + data.daily[4].temp.night + "°C";
    //     day6.textContent = "Morn" + " " +  data.daily[5].temp.morn + "°C" + " " + "Day" + data.daily[5].temp.day + "°C" +  " " + "Eve" + data.daily[5].temp.eve + "°C" +  " " + "Night" + data.daily[5].temp.night + "°C";
    //     day7.textContent = "Morn" + " " +  data.daily[6].temp.morn + "°C" + " " + "Day" + data.daily[6].temp.day + "°C" +  " " + "Eve" + data.daily[6].temp.eve + "°C" +  " " + "Night" + data.daily[6].temp.night + "°C";
    //   } 
    // }

//     const para = document.querySelector('.forecast');
//     var acc = document.getElementsByClassName("accordion");
//     var i; 

//     for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
{moment().format("dddd")}

    return (    
        <div>

        {/* <button id="myDIV" type="button" value="Start" onClick= "NextPage()"  className="button">Yo Yo Yo</button>
        <p className="forecast">Here it is </p> 
      <div className="topLayer">
        <button id="now1" className ="accordion day1 when " type="button" value="Start" ><Days/>  {Math.round(data.current.temp)}°C </button>

        <div className="panel">
        <p className="first">jhhjhkjkj</p>
        </div>

        <button id="now2" className="accordion day2 when" type="button" value="Start" >{(moment().add(+1).format('dddd'))}  {Math.round(data.current.temp)} °C </button>
        <div className="panel">
        <p></p>                                                                           
        </div>
        <button id="now3"  className="accordion day3 when">{Math.round(data.daily[2].temp.day)}°C</button>
        <div className="panel">
          <p >yo</p>
        </div>
        <button id="now4" className="accordion day4 when">{Math.round(data.daily[3].temp.day)}°C</button>
        <div className="panel">
          <p>yo</p>
        </div>
        <button id="now5" className="accordion day5 when">{Math.round(data.daily[4].temp.day)}°C</button>
        <div className="panel">
          <p>yo</p>
        </div>
        <button id="now6" className="accordion day6 when">{Math.round(data.daily[5].temp.day)}°C</button>
        <div className="panel">
          <p>yo</p>
        </div>
        <button id="now7" className="accordion day7 when">{Math.round(data.daily[6].temp.day)}°C</button>
        <div className="panel">
          <p>yo</p>
        </div>
      </div> */}
      </div>
         
    );
  }
  export default NextPage
