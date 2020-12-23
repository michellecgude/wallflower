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
fetch(covidURL, {
		headers: {
			"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
		}
	})
	.then(response => response.json())
	.then(response => {
		let formatConfirmed = response.Global.NewConfirmed;
		confirmData.textContent = formatConfirmed.toLocaleString("en-US");
	})
	.catch(err => err)

// // death data api set to html:
fetch(covidURL, {
		headers: {
			"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
		}
	})
	.then(response => response.json())
	.then(response => {
		let formatDeath = response.Global.NewDeaths;
		deathData.textContent = formatDeath.toLocaleString("en-US");
	})
	.catch(err => err)

// // recover data api set to html:
fetch(covidURL, {
		headers: {
			"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
		}
	})
	.then(response => response.json())
	.then(response => {
		let formatRecovered = response.Global.NewRecovered;
		recoverData.textContent = formatRecovered.toLocaleString("en-US");
	})
	.catch(err => err)

//     // total recovered data api set to html:
fetch(covidURL, {
		headers: {
			"x-access-token": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
		}
	})
	.then(response => response.json())
	.then(response => {
		let formatTotalRecov = response.Global.TotalRecovered;
		totalrecovData.textContent = formatTotalRecov.toLocaleString("en-US");
	})
	.catch(err => err)

document.querySelector("body > div > div.ui-greeting-text > h1").innerHTML = (`Hey there, ${localStorage.getItem("nameValue")}.`);

// // RANDOM ADVICE API URL:
const adviceURL = "https://api.adviceslip.com/advice"

fetch(adviceURL)
	.then(response => response.json())
	.then(response => {
		adviceText.innerHTML = response.slip.advice
	})
	.catch(err => err)

// // Advice API Variables:
const adviceText = document.querySelector(".advice-text-api");
const adviceButton = document.querySelector(".btn-advice");
// JS Interactivity:
// Button to toggle/randomized advice:
adviceButton.onclick = function (event) {
		event.preventDefault();

		fetch(adviceURL)
			.then(response => response.json())
			.then(response => {
				adviceText.innerHTML = response.slip.advice
			})
			.catch(err => err)


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
				.then(response => {
					// grab job data html containers for input:
					const applyPrompt = document.querySelector("#applyHere")
					$("#applyHere").hide().fadeIn(1500);
					// insert results to HTML:
					applyPrompt.innerHTML = ` * Like what you're seeing? Apply <a href=${response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionURI}>here</a>.<br> 
        If not, spread your wings elsewhere and click the button again for another suggestion on us.`


					const jobTitle = document.querySelector("body > div > div.jobs-api-data > div.jobs-results-container > div.jobapi-title")
					// insert results to HTML:
					jobTitle.innerHTML = `${response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionTitle}`;


					const jobLocation = document.querySelector("body > div > div.jobs-api-data > div.jobs-results-container > div.jobapi-location")
					// insert results to HTML:
					jobLocation.innerHTML = `${response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionLocationDisplay}`;

					const jobSalary = document.querySelector("body > div > div.jobs-api-data > div.jobs-results-container > div.jobapi-salary")
					// insert results to HTML:
					jobSalary.innerHTML = `Min: $${response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange} - Max: $${response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange}`;

					const jobDescription = document.querySelector("body > div > div.jobs-api-data > div.jobs-results-container > div.jobapi-description")
					// insert results to HTML:
					jobDescription.innerHTML = `${response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.UserArea.Details.MajorDuties}`;

					$("#apijobtext").hide().fadeIn(2000);
				})

				.catch(err => err)

		}};