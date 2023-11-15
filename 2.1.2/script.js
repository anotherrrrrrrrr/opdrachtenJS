let cart = ["Bananen", "Whisky", "Chips", "Bonen" , "Aardappelen"]

cart[3] = "Bier"

function update() {
    cart = cart.sort()

    document.getElementById("cart").innerHTML = cart.length >= 1 ? `producten in mandje: ${cart.length} (${cart.join(", ")})` : "u heeft geen producten"

    let drop = false
    cart.forEach(item => {
        if (item.toLowerCase() == "drop") {
            drop = true
        }
    })

    document.getElementById("drop").innerHTML = drop ? "u heeft drop :3" : "u heeft geen drop"
}

update()

function addProduct(product) {
    cart.push(product)
    update()
}

let add = document.getElementById("add")

add.onclick = function() {
    let product = prompt("welk product wilt u").trim()

    if (product == "" || product == null) {
        alert("¯\\_(ツ)_/¯")
        return
    }

    addProduct(product)
}

function removeProduct(product) {
    let pos = cart.indexOf(product)

    if (pos != -1) {
        cart.splice(pos, pos - 1)
        update()
    }
}

let remove = document.getElementById("remove")

remove.onclick = function() {
    let product = prompt("welk product wilt u weghalen").trim()

    if (product == "" || product == null) {
        alert("¯\\_(ツ)_/¯")
        return
    }

    removeProduct(product)
}