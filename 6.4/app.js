function calculate(num1, num2) {
    document.getElementById("calculateText").innerHTML = `${num1} + ${num2} = ${num1 + num2}`
}

function multiplyByFive(num) {
    document.getElementById("multiplyText").innerHTML = `${num} * 5 = ${num * 5}`
}

function calculateMinutes(sec) {
    document.getElementById("minuteText").innerHTML = `${sec} seconds = ${Math.floor(sec / 60)} minutes, ${sec % 60} seconds`
}