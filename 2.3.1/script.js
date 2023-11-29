let cart = ["Bananen", "Whisky", "Chips", "Bonen" , "Aardappelen"]

let str = `<b>u heeft ${cart.length} producten:</b> `
cart.forEach(item => {
    str += `${item}, `
})

document.getElementById("cart").innerHTML = str.slice(0, -2)