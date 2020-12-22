// - - - WELCOME TO WALLFLOWER SCRIPT - - - //

// JQUERY DUMMY USER LOGIN: 

$("#greet-button").click(function(event) {
    event.preventDefault();


    $("#login-prompt").fadeOut("slow");
    $("#login-form").fadeOut("slow");

    $(".wallflower-greeting").delay(500).fadeIn(4500).fadeOut(2000);
    $(".welcome-to-wallflower").delay(600).fadeIn(5500).fadeOut(2000);
    
    // LOCAL STORAGE
    let userName = document.querySelector("#put-name").value;
    localStorage.setItem("nameValue", userName);
    
    // welcome to wallflower fade-in greeting:
    // document.getElementById("greeting").innerHTML = (`Nice to meet you, ${window.location.search.substring(12)}.`); // parses string to just showcase data.
    document.getElementById("greeting").innerHTML = (`Nice to meet you, ${localStorage.getItem("nameValue")}.`); // dummy data for now
    document.getElementById("welcome-in").innerHTML = ("Welcome to <span id=wlf-welcome> wallflower</span>."); // parses string to just showcase data.


    window.setTimeout(function () {
        window.location.href = "how-are-you.html"; }, 8000); 
});

