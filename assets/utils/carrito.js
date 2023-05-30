
let carrito = []

let carStatus = document.querySelector(".cart_status");



function addToCart(id) {
  // variable para el addpoint
  let addPoint = document.querySelector(`.add${id}`);

  let product = 0
  for (const item of data1) {
      if (item.id === id) {
        product += carrito.push(product) ;
      }
  }
  carStatus.innerHTML = carrito.length;
  addPoint.classList.toggle('added');
  setTimeout(() => {
  addPoint.classList.toggle('added');
  }, 500);
}