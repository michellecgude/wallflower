// - - - WELCOME TO WALLFLOWER SCRIPT - - - //

// JQUERY DUMMY USER LOGIN: 

$("#greet-button").click(function(event) {
    event.preventDefault();

    $("#login-prompt").fadeOut(2000);
    $("#login-form").fadeOut(2000);

    $(".wallflower-greeting").delay(2000).fadeIn(2000).fadeOut(2000);
    $(".welcome-to-wallflower").delay(6000).fadeIn(2000).fadeOut(2000);
    
    // LOCAL STORAGE
    let userName = document.querySelector("#put-name").value;
    localStorage.setItem("nameValue", userName);
    
    // welcome to wallflower fade-in greeting:
    document.getElementById("greeting").innerHTML = (`Nice to meet you, <span id="name-welcome">${localStorage.getItem("nameValue")}</span>.`);
    document.getElementById("welcome-in").innerHTML = ("Welcome to <br><br><br><span id=wlf-welcome> wallflower</span>");


    window.setTimeout(function () {
        window.location.href = "how-are-you.html"; }, 10000); 
});

