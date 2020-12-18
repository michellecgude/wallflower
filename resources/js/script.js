// COVID DATA API:
const covidURL = "https://api.covid19api.com/summary";

// set potential variables needed:    
let covidData = document.querySelectorAll(".num-data");
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
    .catch(err => console.log(`Sorry, the confirmed COVID cases data isn't available: ${err}`))

// death data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        deathData.innerHTML = response.Global.NewDeaths;
    })
    .catch(err => console.log(`Sorry, the new deaths COVID data isn't available: ${err}`))

// recover data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        recoverData.innerHTML = response.Global.NewRecovered;
    })
    .catch(err => console.log(`Sorry, the new recovered COVID data isn't available: ${err}`))

// total recovered data api set to html:
fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => {
        totalrecovData.innerHTML = response.Global.TotalRecovered;
    })
    .catch(err => console.log(`Sorry, the total recovered COVID data isn't available: ${err}`))

// functions

// NOTE: added numeral.js to help format API numeral data... downloaded Numeral.js javascript library... 