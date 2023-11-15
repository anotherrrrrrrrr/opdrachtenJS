function submitForm(product) {
    document.getElementById("product").innerHTML = `uw product is ${product}`
}

let submit = document.getElementById("submit")
let input = document.getElementById("productinput")

submit.onclick = function() {
    let product = input.value
    submitForm(product)
}