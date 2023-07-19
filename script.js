
//-----------------------------------------------------------------------
// for img 2
let a='dice-06.png';
// Get a reference to the reload button element
const reloadButton = document.getElementById('reloadButton2');

// Add a click event listener to the button
reloadButton.addEventListener('click', function(){
    let rand=Math.floor(Math.random()*6)+1;
    let Dice='dice-0'+rand+'.png'
    console.log(Dice)
var element = document.querySelector('.img2'); // Replace with your own selector

// Get the current CSS property value
var currentUrl = window.getComputedStyle(element).getPropertyValue('background-image');

// Modify the URL

var newUrl = currentUrl.replace(a,Dice);
a=Dice;
console.log(newUrl)
// Apply the updated CSS property value
element.style.backgroundImage = newUrl;
});

//--------------------------------------------------------------------------------------------------------------------------------------------

// for img 1
let b='dice-06.png';
// Get a reference to the reload button element
const reloadButton1 = document.getElementById('reloadButton1');

// Add a click event listener to the button
reloadButton1.addEventListener('click', function(){
    let rand=Math.floor(Math.random()*6)+1;
    let Dice='dice-0'+rand+'.png'
    console.log(Dice)
var element = document.querySelector('.img1'); // Replace with your own selector

// Get the current CSS property value
var currentUrl = window.getComputedStyle(element).getPropertyValue('background-image');

// Modify the URL

var newUrl = currentUrl.replace(b,Dice);
b=Dice;
console.log(newUrl)
// Apply the updated CSS property value
element.style.backgroundImage = newUrl;
});




// // Get a reference to the reload button element
// const reloadButton1 = document.getElementById('reloadButton1');

// // Add a click event listener to the button
// reloadButton1.addEventListener('click', function() {
//   // Reload the webpage
// //   location.reload();
// // Select the element containing the CSS rule
// var element = document.querySelector('.img1'); // Replace with your own selector

// // Get the current CSS property value
// var currentUrl = window.getComputedStyle(element).getPropertyValue('background-image');

// // Modify the URL
// let rand=Math.floor(Math.random()*6)+1;
// let Dice='dice-0'+rand+'.png'
// const newUrl = currentUrl.replace('dice-01.png',Dice);
// console.log(Dice)
// console.log(newUrl)
// // Apply the updated CSS property value
// element.style.backgroundImage = newUrl;
// });








// // Get a reference to the reload button element
// const reloadButton2 = document.getElementById('reloadButton2');
// // Add a click event listener to the button
// reloadButton2.addEventListener('click', function() {
//   // Reload the webpage
//   location.reload();
// });