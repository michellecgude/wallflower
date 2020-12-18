// COVID DATA API URL:
const covidURL = "https://api.covid19api.com/summary";

// COVID API Variables:    
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



// RANDOM ADVICE API URL:
const adviceURL = "https://api.adviceslip.com/advice"

// Advice API Variables:
fetch(adviceURL)
    .then(response => response.json())
    .then(response => console.log(`You're lucky today! Here's some advice just for you ${response.slip.advice}`))
    .catch(err => console.log(`I'm sorry, there's no advice for today ${err}`))






// JS Interactivity:
// let welcomePrompt = prompt("Welcome to Wallflower. Happy you could join us. Let's get you set up. But first, what name do you go by?");

// function mvpGreeting() {
//     let welcomeGreeting = document.querySelector(".headline-text").innerHTML = (`Welcome to Wallflower, ${welcomePrompt}.`);
//     let adviceGreeting = document.querySelector(".advice-header").innerHTML = (`Here's your advice of the day, ${welcomePrompt}:`)

//     return {
//         welcomeGreeting,
//         adviceGreeting
//     };
// }

// if (welcomePrompt !== null || undefined) {
//         alert(`Welcome in! Let's start recovering from the COVID blues together, ${welcomePrompt}.`)
//         mvpGreeting();
//     }



// OLD BUGGY CODE THAT ATTEMPTED TO FIX INITIAL BUGS: 
// let welcomePrompt = prompt("Welcome to Wallflower. Happy you could join us. Let's get you set up. But first, what name do you go by?");

// function mvpGreeting() {
//     let welcomeGreeting = document.querySelector(".headline-text").innerHTML = (`Welcome to Wallflower, ${welcomePrompt}.`);
//     let adviceGreeting = document.querySelector(".advice-header").innerHTML = (`Here's your advice of the day, ${welcomePrompt}:`)

//     return {
//         welcomeGreeting,
//         adviceGreeting
//     };
// }

// while (welcomePrompt == null || undefined || " ") {
//     welcomePrompt = prompt("Please enter a name to experience Wallflower to it's best potential.");

//     if (welcomePrompt !== null || undefined || " ") {
//         alert(`Welcome in! Let's start recovering from the COVID blues together, ${welcomePrompt}.`)
//         mvpGreeting();
//     }
// }