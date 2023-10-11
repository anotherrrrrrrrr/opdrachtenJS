let budget = 100

function check() {
    let product = window.prompt("Hoeveel kost uw product? Uw budget is 100 euro.")
    if (product == null || product == "") {
        product = 177013;
    }
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