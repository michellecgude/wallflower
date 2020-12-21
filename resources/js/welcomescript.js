// - - - WELCOME TO WALLFLOWER SCRIPT - - - //

// JQUERY DUMMY USER LOGIN: 
// using query string to grab name greeting...: (will use cookies in the future once I learn how to use them. Just using this as a loophole because I have limited time with the project.)

$("#greet-button").click(function(event) {
    event.preventDefault();

    $("#login-prompt").fadeOut("slow");
    $("#login-form").fadeOut("slow");

    $(".wallflower-greeting").delay(200).fadeIn(4000).fadeOut(4000);
    $(".welcome-to-wallflower").delay(900).fadeIn(4000).fadeOut(3000);
    
    // LOCAL STORAGE
    let userName = document.querySelector("#put-name").value;
    localStorage.setItem("nameValue", userName);
    
    // welcome to wallflower fade-in greeting:
    // document.getElementById("greeting").innerHTML = (`Nice to meet you, ${window.location.search.substring(12)}.`); // parses string to just showcase data.
    document.getElementById("greeting").innerHTML = (`Nice to meet you, ${localStorage.getItem("nameValue")}.`); // dummy data for now
    document.getElementById("welcome-in").innerHTML = ("Welcome to <span id=wlf-welcome> wallflower</span>."); // parses string to just showcase data.


    window.setTimeout(function () {
        window.location.href = "userinterface.html"; }, 8000); 
});




