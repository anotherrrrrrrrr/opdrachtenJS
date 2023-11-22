let obj = document.getElementById("object")

obj.onclick = function() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    obj.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

let speed = 1
let reverse = false

function move() {
    let currentPos = obj.offsetLeft
    let moveAmount = reverse ? -speed : speed
    let newPos = currentPos + moveAmount

    obj.style.left = newPos + "px"

    if (obj.offsetLeft >= window.screen.width - 51 && !reverse) {
        reverse = true
    }

    if (obj.offsetLeft <= 0 && reverse) {
        reverse = false
    }
}

setInterval(move, 1000 / 60)