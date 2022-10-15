document.querySelector("#check").addEventListener("click", check);
let halloweenMovie = document.getElementById("halloween");
halloweenMovie.addEventListener("keydown", function(e) {
    if (e.keyCode === 13 || e.key === 13) {
        e.preventDefault();
        document.getElementById("check").click();
    }
})

const halloween = "It's the Great Pumpkin Charlie Brown";
function check() {
    const halloween = document.querySelector("#halloween").value.toLowerCase();

    // conditionals
    if(halloween === "it's the great pumpkin charlie brown") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/3o6Zt2qfZ4kOq8Ww6s/giphy.gif')";
    
    } else if (halloween === "haunted mansion") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/5b6b6d060976a4bd19cf5ddd69f44802/3733ced4cd8fa0d3-9d/s540x810/febce2e8e92cf30a87907f15ef8d488235616b96.gifv')";

    } else if (halloween === "hocus pocus") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/bf/60/e7/bf60e75ccd370d6c176285b026dbeef9.gif')";

    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween === "") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else {
        document.querySelector("#placeToSee").innerText = "Like, what was that?";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/GrimBruisedBlackfish-size_restricted.gif')";
    }
}



