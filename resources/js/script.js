// COVID DATA API:
const covidURL = "https://api.covid19api.com/summary";

// set potential variables needed:    
const covidData = document.querySelectorAll(".num-data");
const confirmData = document.querySelector(".confirm-num");
const deathData = document.querySelector(".death-num");
const recoverData = document.querySelector(".recover-num");
const totalrecovData = document.querySelector(".totalrecov-num");

// confirm data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        confirmData.innerHTML = response.Global.NewConfirmed;
    })
    .catch(err => console.log(`Sorry, the confirm data isn't available: ${err}`))

// FIRST API TASK : 
// fetch corresponding COVID data from API per each covid label (ie, new cases, deaths, recovered, etc.)
// attatch it to the HTML <p> tags with num... 