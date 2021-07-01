// let quizMain = document.createElement('div');{
//     quizMain.textContent = "";
//     quizMain.id = "quizMain";
//     document.body.appendChild(quizMain);
// }  

let start = document.createElement('button');{
    start.textContent = "Start";
    start.id = "start";
    document.body.appendChild(start);


document.getElementById('start').onclick = sumPlace;
function sumPlace() {
    quizMain.style.backgroundColor = "rgb(21, 129, 124)";
    let div1 = document.createElement('div');
    div1.textContent = "what is 21+5?";
    div1.id = "div1";
    quizMain.textContent = "Math Problem";
    quizMain.appendChild(div1);

    let div2 = document.createElement('div');
    div2.textContent = "1/5";
    div2.id = "div2";
    quizMain.appendChild(div2);
    
    let button1 = document.createElement('button');
    button1.id = "button1";
    quizMain.appendChild(button1);
    
    let button1s = document.createElement('button');
    button1s.textContent = "1"
    button1s.id = "button1s";
    quizMain.appendChild(button1s);

    let button2 = document.createElement('button');
    button2.id = "button2";
    quizMain.appendChild(button2);

    
    let button2s = document.createElement('button');
    button2s.textContent = "2"
    button2s.id = "button2s";
    quizMain.appendChild(button2s);

    let button3 = document.createElement('button');
    button3.id = "button3";
    quizMain.appendChild(button3);

    let button3s = document.createElement('button');
    button3s.textContent = "3"
    button3s.id = "button3s";
    quizMain.appendChild(button3s);

    let button4 = document.createElement('button');
    button4.id = "button4";
    quizMain.appendChild(button4);

    let button4s = document.createElement('button');
    button4s.textContent = "4"
    button4s.id = "button4s";
    quizMain.appendChild(button4s);

    let button5 = document.createElement('button');
    button5.id = "button5";
    quizMain.appendChild(button5);

    let button5s = document.createElement('button');
    button5s.textContent = "5"
    button5s.id = "button5s";
    quizMain.appendChild(button5s);

    let vorige = document.createElement('button');
    vorige.textContent = "Vorige";
    vorige.id = "vorige";
    quizMain.appendChild(vorige);

    let volgende = document.createElement('button');
    volgende.textContent = "Volgende";
    volgende.id = "volgende";
    quizMain.appendChild(volgende);
    let answer1; {
        document.getElementById('button1').onclick = changeColor;   
        function changeColor() {
            button1.style.background = "rgb(99, 221, 99)";
        }   
        document.getElementById("button1").innerHTML = 26;
}
    let answer2; {
        document.getElementById('button2').onclick = changeColor;   
        function changeColor() {
            button2.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button2").innerHTML = 20;       
    }
    let answer3; {
        document.getElementById('button3').onclick = changeColor;   
        function changeColor() {
            button3.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button3").innerHTML = 15;  
    }
    let answer4; { 
        document.getElementById('button4').onclick = changeColor;   
        function changeColor() {
            button4.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button4").innerHTML = 34; 
    }
    let answer5; {
        document.getElementById('button5').onclick = changeColor;   
        function changeColor() {
            button5.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button5").innerHTML = 27;   
    }


let btn2 = document.getElementById("volgende");
btn2.onclick = function () {
document.getElementById("quizMain")
document.getElementById("div1").innerHTML = "10 + 5";
document.getElementById("volgende").onclick = changeColor2; 
div2.textContent = "2/5"; 
button1.style.background = "white";
button2.style.background = "white";
button3.style.background = "white";
button4.style.background = "white";
button5.style.background = "white";



let blok1 = 13; {
    document.getElementById('button1').onclick = changeColor2;   
    function changeColor2() {
        button1.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button1").innerHTML = 13;                      
}

let blok2 = 14; {
    document.getElementById('button2').onclick = changeColor2;   
    function changeColor2() {
        button2.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button2").innerHTML = 14;                      
}

    
let blok3 = 17; {
    document.getElementById('button3').onclick = changeColor2;   
    function changeColor2() {
        button3.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button3").innerHTML = 17;                      
}


let blok4 = 13; {
    document.getElementById('button4').onclick = changeColor2;   
    function changeColor2() {
        button4.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button4").innerHTML = 12;                      
}

let blok5 = 15; {
    document.getElementById('button5').onclick = changeColor2;   
    function changeColor2() {
        button5.style.background = "rgb(99, 221, 99)";
    }   
    document.getElementById("button5").innerHTML = 15;  
            

    let btn2 = document.getElementById("volgende");
    btn2.onclick = function () {
        document.getElementById("quizMain")
        document.getElementById("div1").innerHTML = "5 + 2";
        document.getElementById("volgende").onclick = changeColor2;
            div2.textContent = "3/5";     
            button1.style.background = "white";
            button2.style.background = "white";
            button3.style.background = "white";
            button4.style.background = "white";
            button5.style.background = "white";

    let blok1 = 12; {
        document.getElementById('button1').onclick = changeColor2;   
        function changeColor2() {
            button1.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button1").innerHTML = 12;                      
    }
            
    let blok2 = 7; {
        document.getElementById('button2').onclick = changeColor2;   
        function changeColor2() {
            button2.style.background = "rgb(99, 221, 99)";
        }   
        document.getElementById("button2").innerHTML = 7;                      
    }

    
    let blok3 = 8; {
        document.getElementById('button3').onclick = changeColor2;   
        function changeColor2() {
            button3.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button3").innerHTML = 8;                      
    }

    
    let blok4 = 13; {
        document.getElementById('button4').onclick = changeColor2;   
        function changeColor2() {
            button4.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button4").innerHTML = 13;                      
    }

    let blok5 = 6; {
        document.getElementById('button5').onclick = changeColor2;   
        function changeColor2() {
            button5.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button5").innerHTML = 6;  
    
        let btn2 = document.getElementById("volgende");
        btn2.onclick = function () {
            document.getElementById("quizMain")
            document.getElementById("div1").innerHTML = "50 + 21";
            document.getElementById("volgende").onclick = changeColor2;
                div2.textContent = "4/5";     
                button1.style.background = "white";
                button2.style.background = "white";
                button3.style.background = "white";
                button4.style.background = "white";
                button5.style.background = "white";
        
                
    let blok1 = 30; {
        document.getElementById('button1').onclick = changeColor2;   
        function changeColor2() {
            button1.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button1").innerHTML = 30;                      
    }

    let blok2 = 45; {
        document.getElementById('button2').onclick = changeColor2;   
        function changeColor2() {
            button2.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button2").innerHTML = 61;                      
    }

                            
    let blok3 = 20; {
        document.getElementById('button3').onclick = changeColor2;   
        function changeColor2() {
            button3.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button3").innerHTML = 70;                      
    }

    
    let blok4 = 30; {
        document.getElementById('button4').onclick = changeColor2;   
        function changeColor2() {
            button4.style.background = "rgb(99, 221, 99)";
        }   
        document.getElementById("button4").innerHTML = 71;                      
    }

    let blok5 = 120; {
        document.getElementById('button5').onclick = changeColor2;   
        function changeColor2() {
            button5.style.background = "rgb(243, 49, 49)";
        }   
        document.getElementById("button5").innerHTML = 52;
    
let btn2 = document.getElementById("volgende");
btn2.onclick = function () {
    document.getElementById("quizMain")
    document.getElementById("div1").innerHTML = "60 : 2";
    document.getElementById("volgende").onclick = changeColor2;
        div2.textContent = "5/5";     
        button1.style.background = "white";
        button2.style.background = "white";
        button3.style.background = "white";
        button4.style.background = "white";
        button5.style.background = "white";

                                            
                            
let blok1 = 40; {
    document.getElementById('button1').onclick = changeColor2;   
    function changeColor2() {
        button1.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button1").innerHTML = 40;                      
}

let blok2 = 45; {
    document.getElementById('button2').onclick = changeColor2;   
    function changeColor2() {
        button2.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button2").innerHTML = 45;                      
}


let blok3 = 20; {
    document.getElementById('button3').onclick = changeColor2;   
    function changeColor2() {
        button3.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button3").innerHTML = 20;                      
}


let blok4 = 30; {
    document.getElementById('button4').onclick = changeColor2;   
    function changeColor2() {
        button4.style.background = "rgb(99, 221, 99)";
    }   
    document.getElementById("button4").innerHTML = 30;                      
}

let blok5 = 120; {
    document.getElementById('button5').onclick = changeColor2;   
    function changeColor2() {
        button5.style.background = "rgb(243, 49, 49)";
    }   
    document.getElementById("button5").innerHTML = 120;
}                              


//met deze knop click ga je naar pagina met text van uitkomst
let uitslag;  {
    document.getElementById("volgende").onclick = btnLast;
    function btnLast () {
    document.getElementById("quizMain").innerHTML = "Jammer!   Je hebt waarschijnlijk andere kwaliteiten";
    quizMain.style.background = "white";
    quizMain.style.fontSize = "30px";
    
}}}

    } } }}}}}}






   




   

           



    





//             // let btn3 = document.getElementById("vorige");
//             // btn3.onclick = function () {
//             //     document.getElementById("quizMain");
//             //     document.getElementById("div1").innerHTML = "21 + 5";
//             //     div2.textContent = "1/5";                                    
//             //         document.getElementById("button1").innerHTML = 26;  
//             //         document.getElementById("button2").innerHTML = 20;                      
//             //         document.getElementById("button3").innerHTML = 15;                      
//             //         document.getElementById("button4").innerHTML = 34;                      
//             //         document.getElementById("button5").innerHTML = 27;  
//             // }
                           
        




//         // let btn3 = document.getElementById("vorige");
//         // btn3.onclick = function () {
//         //     document.getElementById("quizMain");
//         //     document.getElementById("div1").innerHTML = "10 + 5";
//         //     div2.textContent = "2/5";                                    
//         //         document.getElementById("button1").innerHTML = 13;  
//         //         document.getElementById("button2").innerHTML = 14;                      
//         //         document.getElementById("button3").innerHTML = 17;                      
//         //         document.getElementById("button4").innerHTML = 12;                      
//         //         document.getElementById("button5").innerHTML = 15;  
//         // }




                                
                                


                                        

    



                                    
// //                                         // let btn3 = document.getElementById("vorige");
// //                                         // btn3.onclick = function () {
// //                                         //     document.getElementById("quizMain");
// //                                         //     document.getElementById("div1").innerHTML = "50 + 21";
// //                                         //     div2.textContent = "4/5";                                    
// //                                         //         document.getElementById("button1").innerHTML = 60;  
// //                                         //         document.getElementById("button2").innerHTML = 72;                      
// //                                         //         document.getElementById("button3").innerHTML = 71;                      
// //                                         //         document.getElementById("button4").innerHTML = 75;                      
// //                                         //         document.getElementById("button5").innerHTML = 69;  
// //                                         // }
                                    

// //                                         // let btn3 = document.getElementById("vorige");
//                                 // btn3.onclick = function () {
//                                 //     document.getElementById("quizMain");
//                                 //     document.getElementById("div1").innerHTML = "5 + 2";
//                                 //     div2.textContent = "3/5";                                    
//                                 //         document.getElementById("button1").innerHTML = 12;  
//                                 //         document.getElementById("button2").innerHTML = 7;                      
//                                 //         document.getElementById("button3").innerHTML = 8;                      
//                                 //         document.getElementById("button4").innerHTML = 13;                      
//                                 //         document.getElementById("button5").innerHTML = 6;  
//                                 // }

                             
                                    
                                      

                            
                
            
// let start = document.createElement('button');
// start.textContent = "Start";
// start.id = "start";
// document.body.appendChild(start);

// let restart = document.createElement('button');
// restart.textContent = "reStart";
// restart.id = "restart";
// document.body.appendChild(restart);

// startknop waardoor je naar de eerste vraag gaat.
// let starter = document.getElementById("quizMain");
//     let btn = document.getElementById("start");
//     btn.onclick = function () {
//       if (starter.style.display !== "block") {
//         starter.style.display = "block";
//       } else {
//         starter.style.display = "none";
//       }
//     }


           

   
















// // function Palindrome(){

// //     let arr = [];    
// //     for(let i = 999; i>100; i--){
// //         for(let j = 999; j>100; j--){
// //             let yes = j*i;
// //             if(isPalindrome(yes)){
// //                 arr.push(j * i);
// //             }
// //         }
// //     }

// //     return Math.max.apply(Math, arr);
// // }

// // function isPalindrome(i){
// //     return i.toString() == i.toString().split("").reverse().join("");
// // }

// // console.log(Palindrome());

// //----------------------

// // class PalindromNumbers
// // {
// //     public string GetPalindromeNumber(int maxNumber = 999)
// //     {
// //         bool breakOut = false;
// //         int test=0;
// //         int left = 0;
// //         int right = 0;
// //         int biggestNumber = 0;
// //         string returnString=string.Empty;
// //         for (left=maxNumber; left >= 0; left--)
// //         {
// //             for(right=maxNumber; right >= 0; right--)
// //             {
// //                 test = left * right;

// //                 string testNumberAsString = Convert.ToString(test);
// //                 string reverse = string.Empty;
// //                 for (int index = testNumberAsString.Length; index > 0; index--)
// //                 {
// //                     reverse += testNumberAsString[index-1];
// //                 }

// //                 breakOut = (testNumberAsString == reverse && Convert.ToString(left).Length == 3 && Convert.ToString(right).Length == 3);

// //                 if (breakOut )
// //                 {
// //                     break;
// //                 }
// //             }

// //             if (test>biggestNumber)
// //             {
// //                 biggestNumber = test;
// //                 returnString = $"Palindrome: {test}, Left: {left}, Right: {right}";
// //             }
// //         }

// //         return returnString;
// //     }
// // }



