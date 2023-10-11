let budget = 100
let product = 60

function check() {
    /*
        de betere manier
        document.getElementById("text").innerHTML = (budget >= product) ? "U heeft genoeg geld!" : "Helaas, niet genoeg geld"
    */

    if (budget >= product) {
        document.getElementById("text").innerHTML = "U heeft genoeg geld!"
        document.getElementById("text").style.color = "rgb(0, 255, 0)"
    } else {
        document.getElementById("text").innerHTML = "Helaas, niet genoeg geld"
        document.getElementById("text").style.color = "rgb(255, 0, 0)"
    } 
}