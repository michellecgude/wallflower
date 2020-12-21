// // COVID DATA API URL:
const covidURL = "https://api.covid19api.com/summary";

// // COVID API Variables:    
let covidData = document.querySelectorAll(".num-data");
const confirmData = document.querySelector(".confirm-num");
const deathData = document.querySelector(".death-num");
const recoverData = document.querySelector(".recover-num");
const totalrecovData = document.querySelector(".totalrecov-num");

// // Fetch COVID Data:
// // confirm data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
.then(response => response.json())
.then(response => {
    let formatConfirmed = response.Global.NewConfirmed;
    confirmData.textContent = formatConfirmed.toLocaleString("en-US");
})
.catch(err => console.log(`Sorry, the confirmed COVID cases data isn't available: ${err}`))

// // death data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
.then(response => response.json())
.then(response => {
    let formatDeath = response.Global.NewDeaths;
    deathData.textContent = formatDeath.toLocaleString("en-US");
})
.catch(err => console.log(`Sorry, the new deaths COVID data isn't available: ${err}`))

// // recover data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
.then(response => response.json())
.then(response => {
    let formatRecovered = response.Global.NewRecovered;
    recoverData.textContent = formatRecovered.toLocaleString("en-US");
})
    .catch(err => console.log(`Sorry, the new recovered COVID data isn't available: ${err}`))
    
    //     // total recovered data api set to html:
    fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
.then(response => response.json())
.then(response => {
    let formatTotalRecov = response.Global.TotalRecovered;
    totalrecovData.textContent = formatTotalRecov.toLocaleString("en-US");
})
.catch(err => console.log(`Sorry, the total recovered COVID data isn't available: ${err}`))


// // RANDOM ADVICE API URL:
const adviceURL = "https://api.adviceslip.com/advice"

// // Advice API Variables:
const adviceText = document.querySelector(".advice-text-api");
const adviceButton = document.querySelector(".btn-advice");



// // Fetch API Data:
// // generic quote fetch
fetch(adviceURL)
.then(response => response.json())
.then(response => {adviceText.innerHTML = response.slip.advice})
.catch(err => console.log(`I'm sorry, there's no advice for today ${err}`))



// JS Interactivity:

// Button to toggle/randomized advice:
adviceButton.onclick = function (event) {
    event.preventDefault();
    
    fetch(adviceURL)
    .then(response => response.json())
    .then(response => {adviceText.innerHTML = response.slip.advice})
    .catch(err => console.log(`I'm sorry, there's no advice for today ${err}`))
}

// FUTURE JQUERY SCRIPT WILL GO HERE.
document.querySelector("body > div > div.ui-greeting-text > h1").innerHTML = (`Hey there, ${localStorage.getItem("nameValue")}.`); // parses string to just showcase data.


// creates a button for the divs tracker, appends to document by class.
// $(document).ready(function() {
//     for (i = 1; i <= 1; i++) {
//         $("<button/>", {
//             "class" : "button-ui",
//         }).appendTo(".trck");
//     }
// });

// for every ".trck" element, iterate a link tag.
// $(document).ready(function() {
//     for (i = 1; i <= 1; i++) {
//         $("<a href=# id=button-link>", {
//         }).appendTo(".trck");
//     }
// });

// jquery hover() method for ui functionality of mood tracker