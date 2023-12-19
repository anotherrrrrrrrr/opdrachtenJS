let buttons = [
    document.getElementById("rock"),
    document.getElementById("paper"),
    document.getElementById("scissors"),
]

let texts = {
    player: document.getElementById("plrChoice"),
    bot: document.getElementById("botChoice"),
    result: document.getElementById("result"),
}

function roll(button) {
        let plrChoice = button.id
        let botChoice = buttons[Math.floor(Math.random() * 3)].id
        let result = ""

        texts.player.innerHTML = `player choice: ${plrChoice}`
        texts.bot.innerHTML = `bot choice: ${botChoice}`

        if (plrChoice == botChoice) {
            result = "draw"
        } else if (botChoice == "rock" && plrChoice == "paper") {
            result = "you won"
        } else if (botChoice == "rock" && plrChoice == "scissors") {
            result = "you lose"
        } else if (botChoice == "paper" && plrChoice == "scissors") {
            result = "you won"
        } else if (botChoice == "paper" && plrChoice == "rock") {
            result = "you lose"
        } else if (botChoice == "scissors" && plrChoice == "rock") {
            result = "you won"
        } else if (botChoice == "scissors" && plrChoice == "paper") {
            result = "you lose"
        }

        texts.result.innerHTML = `result: ${result}`
}

buttons.forEach(button => {
    button.onclick = function() {
        roll(button)
    }
})