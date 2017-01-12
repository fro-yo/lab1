var BACKGROUNDS = 2;

var backgroundNum = 0;
document.addEventListener ("DOMContentLoaded", function() {
    let date = new Date();
    let backgroundNum = Math.floor(Math.random() * 4) + 1;
    localStorage.setItem ("backgroundNum", backgroundNum);
    // let backgroundNum = date.getDate() % BACKGROUNDS + 1;
    let backgroundUrl = "url(backgrounds/"+backgroundNum+".jpg)";
    document.getElementById ("body").style.backgroundImage = backgroundUrl;
});
