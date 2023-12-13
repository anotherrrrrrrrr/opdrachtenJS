function update(amount, table) {
    let str = ""
    
    for (i = 1; i <= amount; i++) {
        str += `${i} x ${table} = ${i * table}`
        str += "<br>"
    }

    document.getElementById("text").innerHTML = str
}

let submit = document.getElementById("submit")
let amount = document.getElementById("amountinput")
let table = document.getElementById("tableinput")

submit.onclick = function() {
    update(amount.value, table.value)
}