


let quizMain = document.createElement('div');
quizMain.textContent = "";
quizMain.className= "quizMain";
document.body.appendChild(quizMain);

let div1 = document.createElement('div');
div1.textContent = "what is 21-16?";
div1.className = "div1";
quizMain.appendChild(div1);

let div2 = document.createElement('div');
div2.textContent = "1/10";
div2.className = "div2";
quizMain.appendChild(div2);



let button1 = document.createElement('button');
button1.textContent = "button 1";
button1.className = "button1";
quizMain.appendChild(button1);

let button1s = document.createElement('button');
button1s.textContent = "1"
button1s.className = "button1s";
quizMain.appendChild(button1s);



let button2 = document.createElement('button');
button2.textContent = "button 2";
button2.className = "button2";
quizMain.appendChild(button2);

let button2s = document.createElement('button');
button2s.textContent = "2"
button2s.className = "button2s";
quizMain.appendChild(button2s);



let button3 = document.createElement('button');
button3.textContent = "button 3";
button3.className = "button3";
quizMain.appendChild(button3);

let button3s = document.createElement('button');
button3s.textContent = "3"
button3s.className = "button3s";
quizMain.appendChild(button3s);


let button4 = document.createElement('button');
button4.textContent = "button 4";
button4.className = "button4";
quizMain.appendChild(button4);

let button4s = document.createElement('button');
button4s.textContent = "4"
button4s.className = "button4s";
quizMain.appendChild(button4s);



let button5 = document.createElement('button');
button5.textContent = "button 5";
button5.className = "button5";
quizMain.appendChild(button5);

let button5s = document.createElement('button');
button5s.textContent = "5"
button5s.className = "button5s";
quizMain.appendChild(button5s);


let vorige = document.createElement('button');
vorige.textContent = "Vorige";
vorige.className = "vorige";
document.body.appendChild(vorige);

let volgende = document.createElement('button');
volgende.textContent = "Volgende";
volgende.className = "volgende";
document.body.appendChild(volgende);



let start = document.createElement('button');
start.innerHTML = "Start";
start.id = "start";
start.value = "myValue";
document.body.appendChild(start);

start.onclick = function(){
    let x = document.getElementById("start").value;
    document.getElementById("start").innerHTML = x;
  }
    console.log("show me");

      



