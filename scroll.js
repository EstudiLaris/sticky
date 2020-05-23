window.onscroll = function() {
    menuScroll()
};

function menuScroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("subTitol").style.fontSize = ".75rem";
        document.getElementById("titol").style.fontSize = ".75rem";
        /* document.getElementById("btn").style.fontSize = "1.2rem"; */

    } else {
        /* if (screen.width > 599) { */
        document.getElementById("subTitol").style.fontSize = "1.625rem";
        document.getElementById("titol").style.fontSize = "2rem";
        /* document.getElementById("btn").style.fontSize = "1.75rem"; */
    }
    /* } */
}