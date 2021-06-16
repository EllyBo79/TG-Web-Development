// let Carrousel = 3;
// showPics(Carrousel);

// function nextSlide() {
//     showPics(Carrousel += 1);
// }

// function previousSlide() {
//     showPics(Carrousel -= 1);  
// }

// function currentSlide(n) {
//     showPics(Carrousel = n);
// }

// function showPics(n) {
//     let i;
//     let slides = document.getElementsByClassName("food");
    
//     if (n > slides.length) {
//       Carrousel = 1
//     }
//     if (n < 1) {
//         Carrousel = slides.length
//     }
  
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }   
//     slides[Carrousel - 1].style.display = "block"; 
// }




function myFunctionNext() {
    document.getElementById("images").style.transform = "translateX(-1250px)";
     
}
  

function myFunctionPrev() {
    document.getElementById("images").style.transform = "translateX(1250px)"; 
}




// let pictures = [
//     "images/image1.jpg",
//     "images/image2.jpg",
//     "images/image3.jpg"
// ],
// curIndex = 0;

// function myFunctionNext() {
//     document.getElementById('image1').src = pictures[curIndex];
//     curIndex++;
//     if (curIndex == pictures.length) { 
//         curIndex += 2; }
// }
// myFunctionNext();



// function myFunctionPrev() {
//     document.getElementById('image1').src = pictures[curIndex];
//     curIndex++;
//     if (curIndex == pictures.length) { 
//         curIndex -= 2; }
// }
// myFunctionPrev();


