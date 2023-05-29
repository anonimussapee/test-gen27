
let carrito = []

let carStatus = document.querySelector(".car_status")

function addToCart(id) {
    for (const item of data1) {
        let product = 0
        if (item.id === id) {
          product+= 
         carrito.push(product)
        }
    }
    carStatus.innerHTML = carrito.length
}

