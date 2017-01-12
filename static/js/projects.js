var BACKGROUNDS = 2;

document.addEventListener ("DOMContentLoaded", function() {
    let backgroundNum = localStorage.getItem ("backgroundNum");
    let backgroundUrl = "url(../backgrounds/"+backgroundNum+".jpg)";
    document.getElementById ("projectSidebar").style.backgroundImage = backgroundUrl;
});
