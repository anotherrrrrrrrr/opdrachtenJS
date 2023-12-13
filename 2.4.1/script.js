let str = ""
for (i = 1; i <= 10; i++) {
    str += `${i} x 10 = ${i * 10}`
    str += "<br>"
}

document.getElementById("text").innerHTML = str