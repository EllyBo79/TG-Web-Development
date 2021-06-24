
let div1 = document.createElement('div');
div1.textContent = "what is 21+5?";
div1.id = "div1";
quizMain.appendChild(div1);


let div2 = document.createElement('div');
div2.textContent = "1/5";
div2.id = "div2";
quizMain.appendChild(div2);



let button1 = document.createElement('button');
// button1.textContent = "button 1";
button1.id = "button1";
quizMain.appendChild(button1);

let button1s = document.createElement('button');
button1s.textContent = "1"
button1s.id = "button1s";
quizMain.appendChild(button1s);



let button2 = document.createElement('button');
// button2.textContent = "button 2";
button2.id = "button2";
quizMain.appendChild(button2);

let button2s = document.createElement('button');
button2s.textContent = "2"
button2s.id = "button2s";
quizMain.appendChild(button2s);



let button3 = document.createElement('button');
// button3.textContent = "button 3";
button3.id = "button3";
quizMain.appendChild(button3);

let button3s = document.createElement('button');
button3s.textContent = "3"
button3s.id = "button3s";
quizMain.appendChild(button3s);


let button4 = document.createElement('button');
// button4.textContent = "button 4";
button4.id = "button4";
quizMain.appendChild(button4);

let button4s = document.createElement('button');
button4s.textContent = "4"
button4s.id = "button4s";
quizMain.appendChild(button4s);



let button5 = document.createElement('button');
// button5.textContent = "button 5";
button5.id = "button5";
quizMain.appendChild(button5);

let button5s = document.createElement('button');
button5s.textContent = "5"
button5s.id = "button5s";
quizMain.appendChild(button5s);


let vorige = document.createElement('button');
vorige.textContent = "Vorige";
vorige.id = "vorige";
document.body.appendChild(vorige);

let volgende = document.createElement('button');
volgende.textContent = "Volgende";
volgende.id = "volgende";
document.body.appendChild(volgende);



let start = document.createElement('button');
start.textContent = "Start";
start.id = "start";
document.body.appendChild(start);

//startknop waardoor je naar de eerste vraag gaat.
let targetDiv = document.getElementById("quizMain");
    let btn = document.getElementById("start");
    btn.onclick = function () {
      if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "block";
      } else {
        targetDiv.style.display = "none";
      }
    };

    // Deze moeten allemaal in 1 function komen. Hoe dan?
   // Dit is de eerste vraag
    let answer1 = 26; {
        document.getElementById('button1').onclick = changeColor;   
        function changeColor() {
            button1.style.background = "green";
        }   
        document.getElementById("button1").innerHTML = 26;                      
    }
    let answer2 = 20; {
    document.getElementById('button2').onclick = changeColor;   
    function changeColor() {
        button2.style.background = "red";
    }   
    document.getElementById("button2").innerHTML = 20;       
    }
//  Vraag 1 moet meerdere opties krijgen. Niet meerdere vraagnummers per beeld. Lukt niet hoe ik het wil.
    let answer3 = 15; {  
    document.getElementById('button3').onclick = changeColor;   
    function changeColor() {
        button3.style.background = "red";
    }   
    document.getElementById("button3").innerHTML = 15;   
    }

    let answer4 = 34; {  
        document.getElementById('button4').onclick = changeColor;   
        function changeColor() {
            button4.style.background = "red";
        }   
        document.getElementById("button4").innerHTML = 34;   
        }

        let answer5 = 27; {  
            document.getElementById('button5').onclick = changeColor;   
            function changeColor() {
                button5.style.background = "red";
            }   
            document.getElementById("button5").innerHTML = 27;   
            }

           

//misschien functie schrijven, zodat bij eerte onclick alles wit kleurt.



    let second = document.getElementById("quizMain");
    let btn2 = document.getElementById("volgende");
    btn2.onclick = function () {
        document.getElementById("div1").innerHTML = "10 + 5";
        
    
        let blok1 = 13; {
            document.getElementById('button1').onclick = changeColor2;   
            function changeColor2() {
                button1.style.background = "white";
                button1.style.background = "red";
            }   
            document.getElementById("button1").innerHTML = 13;                      
        }
    
        let blok2 = 14; {
            document.getElementById('button2').onclick = changeColor2;   
            function changeColor2() {
                button2.style.background = "white";
                button2.style.background = "red";
            }   
            document.getElementById("button2").innerHTML = 14;                      
        }

        
        let blok3 = 17; {
            document.getElementById('button3').onclick = changeColor2;   
            function changeColor2() {
                button3.style.background = "white";
                button3.style.background = "red";
            }   
            document.getElementById("button3").innerHTML = 17;                      
        }

       
        let blok4 = 13; {
            document.getElementById('button4').onclick = changeColor2;   
            function changeColor2() {
                button4.style.background = "white";
                button4.style.background = "red";
            }   
            document.getElementById("button4").innerHTML = 12;                      
        }

        let blok5 = 15; {
            document.getElementById('button5').onclick = changeColor2;   
            function changeColor2() {
                button5.style.background = "white";
                button5.style.background = "green";
            }   
            document.getElementById("button5").innerHTML = 15;                      
        }
        }

    
    



   
















// function Palindrome(){

//     let arr = [];    
//     for(let i = 999; i>100; i--){
//         for(let j = 999; j>100; j--){
//             let yes = j*i;
//             if(isPalindrome(yes)){
//                 arr.push(j * i);
//             }
//         }
//     }

//     return Math.max.apply(Math, arr);
// }

// function isPalindrome(i){
//     return i.toString() == i.toString().split("").reverse().join("");
// }

// console.log(Palindrome());

//----------------------

// class PalindromNumbers
// {
//     public string GetPalindromeNumber(int maxNumber = 999)
//     {
//         bool breakOut = false;
//         int test=0;
//         int left = 0;
//         int right = 0;
//         int biggestNumber = 0;
//         string returnString=string.Empty;
//         for (left=maxNumber; left >= 0; left--)
//         {
//             for(right=maxNumber; right >= 0; right--)
//             {
//                 test = left * right;

//                 string testNumberAsString = Convert.ToString(test);
//                 string reverse = string.Empty;
//                 for (int index = testNumberAsString.Length; index > 0; index--)
//                 {
//                     reverse += testNumberAsString[index-1];
//                 }

//                 breakOut = (testNumberAsString == reverse && Convert.ToString(left).Length == 3 && Convert.ToString(right).Length == 3);

//                 if (breakOut )
//                 {
//                     break;
//                 }
//             }

//             if (test>biggestNumber)
//             {
//                 biggestNumber = test;
//                 returnString = $"Palindrome: {test}, Left: {left}, Right: {right}";
//             }
//         }

//         return returnString;
//     }
// }