window.addEventListener("load", function() {
    const canvas = document.querySelector("canvas")

    const ctx = canvas.getContext("2d")

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    let painting = false

    function startPosition() {
        painting = true
    }

    function finishedPosition() {
        painting = false
    }

    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)

    function draw(e) {
        if (!painting) {
            return
        }

        console.log(e)

        ctx.lineWidth = 10
        ctx.lineCap = "round"
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }

    function startPosition(e) {
        painting = true
        console.log("im painting")
        draw(e)
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath()
    }
})