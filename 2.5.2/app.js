let startBtn = document.getElementById("start")

startBtn.onclick = start

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function start() {
    startBtn.style.display = "none"

    let clicker = document.createElement("div")
    clicker.style.width = "100vw"
    clicker.style.height = "100vh"
    clicker.style.position = "fixed"
    clicker.style["z-index"] = -177013
    clicker.style.backgroundColor = "red"

    document.body.appendChild(clicker)
    
    let startTime = null

    clicker.addEventListener("click", function() {
        clicker.removeEventListener("click", function() {})

        if (clicker.style.backgroundColor == "red") {
            alert("too early")

            clicker.remove()
            startBtn.style.display = "block"
        } else {
            let now = new Date().getTime()
            let ms = now - startTime
            
            clicker.remove()
            startBtn.style.display = "block"
            
            alert(`reaction time: ${ms}ms`)
        }
    })

    setTimeout(function() {
        startTime = new Date().getTime()
        clicker.style.backgroundColor = "green"
    }, randomNum(1, 10) * 1000)
}