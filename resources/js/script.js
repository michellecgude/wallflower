// console.log("welcome to wallflower.");

// COVID DATA API:
const covidURL = "https://api.covid19api.com/summary";

fetch(covidURL, {headers: {"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"}})
    .then(response => response.json())
    .then(response => console.log("Feeling well enough to check the data? Here's the COVID Data for today:" + response.Global.NewConfirmed))
    .catch(err => console.log("Not up to it? That's okay. We couldn't reach the data unfortunately. We're sorry about that:" + err));