// COVID DATA API:
const covidURL = "https://api.covid19api.com/summary";

// API Variables:    
let covidData = document.querySelectorAll(".num-data");
const confirmData = document.querySelector(".confirm-num");
const deathData = document.querySelector(".death-num");
const recoverData = document.querySelector(".recover-num");
const totalrecovData = document.querySelector(".totalrecov-num");

// confirm data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {confirmData.innerHTML = response.Global.NewConfirmed;})
    .catch(err => console.log(`Sorry, the confirmed COVID cases data isn't available: ${err}`))

// death data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {deathData.innerHTML = response.Global.NewDeaths;})
    .catch(err => console.log(`Sorry, the new deaths COVID data isn't available: ${err}`))

// recover data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {recoverData.innerHTML = response.Global.NewRecovered;})
    .catch(err => console.log(`Sorry, the new recovered COVID data isn't available: ${err}`))

// total recovered data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {totalrecovData.innerHTML = response.Global.TotalRecovered;})
    .catch(err => console.log(`Sorry, the total recovered COVID data isn't available: ${err}`))


// JS Interactivity:

// Created Dummy Login via prompt, function that changes HTML, as well as while loop that continues to prompt the user for an input). 
// NOTE: This is for MVP functionality. If I have the time, I really want to use either a modal, or even create a greeting page (ie, separate HTML file that remembers the name input and transfers it over to the general interface of Wallflower. But for now, this will do for the MVP.)
let welcomePrompt = prompt("Welcome to Wallflower. Happy you could join us. Let's get you set up. But first, what name do you go by?");

function mvpGreeting() {
    let welcomeGreeting = document.querySelector(".headline-text").innerHTML = (`Welcome to Wallflower, ${welcomePrompt}.`);
    let adviceGreeting = document.querySelector(".advice-header").innerHTML = (`Here's your advice of the day, ${welcomePrompt}:`)

    return {
        welcomeGreeting,
        adviceGreeting
    };
}

while (welcomePrompt == null || undefined) {
    welcomePrompt = prompt("Please enter a name to experience Wallflower to it's best potential.");

    if (welcomePrompt !== null || undefined) {
        alert(`Welcome in! Let's start recovering from the COVID blues together, ${welcomePrompt}.`)
        mvpGreeting();
    }
}
    

