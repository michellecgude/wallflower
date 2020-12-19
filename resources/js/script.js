// COVID DATA API URL:
const covidURL = "https://api.covid19api.com/summary";

// COVID API Variables:    
let covidData = document.querySelectorAll(".num-data");
const confirmData = document.querySelector(".confirm-num");
const deathData = document.querySelector(".death-num");
const recoverData = document.querySelector(".recover-num");
const totalrecovData = document.querySelector(".totalrecov-num");

// Fetch COVID Data:
// confirm data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        let formatConfirmed = response.Global.NewConfirmed;
        confirmData.textContent = formatConfirmed.toLocaleString("en-US");
    })
    .catch(err => console.log(`Sorry, the confirmed COVID cases data isn't available: ${err}`))



// death data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        let formatDeath = response.Global.NewDeaths;
        deathData.textContent = formatDeath.toLocaleString("en-US");
    })
    .catch(err => console.log(`Sorry, the new deaths COVID data isn't available: ${err}`))

// recover data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        let formatRecovered = response.Global.NewRecovered;
        recoverData.textContent = formatRecovered.toLocaleString("en-US");
    })
    .catch(err => console.log(`Sorry, the new recovered COVID data isn't available: ${err}`))

// total recovered data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        let formatTotalRecov = response.Global.TotalRecovered;
        totalrecovData.textContent = formatTotalRecov.toLocaleString("en-US");
    })
    .catch(err => console.log(`Sorry, the total recovered COVID data isn't available: ${err}`))


// DATA TO FORMATTED NUMERALS: 
/* 


Use :  miscellaneous.toLocalString("en-IN");

document.write(miscellaneous.toLocaleString("en-IN"));
*/ 












// RANDOM ADVICE API URL:
const adviceURL = "https://api.adviceslip.com/advice"

// Advice API Variables:
const adviceText = document.querySelector(".advice-text");
const adviceButton = document.querySelector(".btn-advice");

// Fetch API Data:
// generic quote fetch
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



// Dummy login via prompts that affect HTML:
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