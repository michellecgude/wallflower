// - - - WELCOME TO WALLFLOWER SCRIPT - - - //

// JQUERY DUMMY USER LOGIN: 

$("#greet-button").click(function(event) {
    event.preventDefault();

    $("#login-prompt").fadeOut(2000);
    $("#login-form").fadeOut(2000);

    $(".wallflower-greeting").delay(3500).fadeIn(3000).fadeOut(3000);
    $(".welcome-to-wallflower").delay(9000).fadeIn(3000).fadeOut(3000);
    
    // LOCAL STORAGE
    let userName = document.querySelector("#put-name").value;
    localStorage.setItem("nameValue", userName);
    
    // welcome to wallflower fade-in greeting:
    document.getElementById("greeting").innerHTML = (`Nice to meet you, <span id="name-welcome">${localStorage.getItem("nameValue")}</span>.`);
    document.getElementById("welcome-in").innerHTML = ("Welcome to <br><br><br><span id=wlf-welcome> wallflower</span>");


    window.setTimeout(function () {
        window.location.href = "how-are-you.html"; }, 15000); 
});

