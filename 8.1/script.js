function calculate(op) {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)

    let answer = 0;

    switch(op) {
        case "+":
            answer = num1 + num2
            break
        case "-":
            answer = num1 - num2
            break
        case "x":
            answer = num1 * num2
            break
        case "/":
            if (num2 == 0) {
                answer = "☺☺☺☺☺"
                break
            }

            answer = num1 / num2
            break 
    }

    document.getElementById("answer").innerHTML = `${num1} ${op} ${num2} = ${answer}`
}