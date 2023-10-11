let clicks = 0

function countClick() {
    clicks = clicks + 1
    if (clicks >= 10) {
        clicks = 0
    }
    document.getElementById("clickCounter").innerHTML = `${clicks}`
}