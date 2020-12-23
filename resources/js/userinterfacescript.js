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







// JOBS API:
// JOB VARIABLES TO SET UP SEARCH BAR:
let jobButton = document.querySelector("#searchButton");

jobButton.onclick = function getJobSearchData(evnt) {

    evnt.preventDefault();

    let userJobSearch = document.querySelector("#jobSearchInput").value;

    const jobsURL = `https://data.usajobs.gov/api/search?Keyword=${userJobSearch}`;

    var myHeaders = new Headers();
    myHeaders.append("Authorization-Key", "LayC1BkiHRhSbxy6Rn0PGulqnmuyDX+VvObEwydaJXU=");
    myHeaders.append("Cookie", "akavpau_DATA_USAJ=1608688790~id=0e6b539bf4a6ea30a11894596f4f3fa3");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(jobsURL, requestOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log('error', error));

}











// FUTURE JQUERY SCRIPT WILL GO HERE.
document.querySelector("body > div > div.ui-greeting-text > h1").innerHTML = (`Hey there, ${localStorage.getItem("nameValue")}.`); // parses string to just showcase data.

