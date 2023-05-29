let data1 = [
    {
        img: "https://i.pinimg.com/564x/04/8b/11/048b11c1bc69537f39cad14817acdda1.jpg",
        tittle: "Chompa nike para hombre negra",
        price: 49.99,
        desc: "Chompa de hombre elástica",
        id: 1,
    },
    {
        img: "https://i.pinimg.com/564x/fc/b2/72/fcb272223e321e43b737e57743741350.jpg",
        tittle: "Camiseta nike Just it",
        price: 19.99,
        desc: "Camiseta hombre just do it",
        id: 2,
    },
    {
        img: "https://i.pinimg.com/564x/23/4f/75/234f7511dd4669c19d2c957097ca6f9b.jpg",
        tittle: "Camiseta ploma Nike SB",
        price: 17.50,
        desc: "Camiseta para hombre SB",
        id: 3,
    },
    {
        img: "https://i.pinimg.com/564x/9b/0e/b6/9b0eb67ef74d5f30fc5fa77191aa5e9d.jpg",
        tittle: "Licra deportiva Balance de mujer ",
        price: 24.99,
        desc: "Licra de mujer Balance negra",
        id: 4,
    },
    {
        img: "https://i.pinimg.com/564x/67/d5/a3/67d5a350770b8633e94655062275f97f.jpg",
        tittle: "Hoddie ploma y negro de mujer",
        price: 35.00,
        desc: "Hoodie polo y negro con capucha e interior acolchonado",
        id: 5,
    },
    {
        img: "https://i.pinimg.com/564x/15/7c/9d/157c9dbdfb305399a4d7f15c39ac9002.jpg",
        tittle: "Zapatos nike sport balance unisex",
        price: 75.00,
        desc: "Zapatos Sport Balance blancos para correr y crossfit",
        id: 6,
    },
    {
        img: "https://co.pinterest.com/pin/341781059222269658/",
        tittle: "Zapatos nike Air Jordan",
        price: 155.99,
        desc: "Jordan Air Jordan 1 High OG blanco y rojo",
        id: 7,
    },
    {
        img: "https://i.pinimg.com/564x/f2/01/81/f2018108877cfd65c9d0098baae1c8d9.jpg",
        tittle: "Camiseta nike blanca con diseño",
        price: 22.99,
        desc: "Camiseta unisex blanca con diseños deportiva",
        id: 8,
    },
    {
        img: "https://i.pinimg.com/564x/6d/3d/e1/6d3de1959ec3062de61901c414c3c3b9.jpg",
        tittle: "Zapatos Nike Air Jordan",
        price: 299.00,
        desc: "Zapatos Air Jordan sport skyblue de mujer edición especial",
        id: 9,
    },
    {
        img: "https://i.pinimg.com/564x/69/36/e5/6936e5832426715a2e43179d203dd86d.jpg",
        tittle: "Conjunto deportivo rojo nike de mujer ",
        price: 45.99,
        desc: "Cojunto deportivo nike/bulls edición limitada rojo",
        id: 10,
    },
];

let containerCards = document.querySelector('.product--cards-container');
(()=>{
    
    let view = ``;
    data1.forEach(item =>{
        view += `<article class="cards">
        <img src="${item.img}" alt="${item.tittle}">
        <h3>${item.tittle}</h3>
        <p class="price">${item.price} $</p>
        <details>
          <summary >descripcion del producto</summary>
          <p>${item.desc}</p>
        </details>
      </article>`
    });
    containerCards.innerHTML = view;
})();

let searchBox = document.querySelector(".search_box")

searchBox.addEventListener("keyup", () => {
    let boxValue = (searchBox.value).toLowerCase();
    let view = ``;
    for (const item of data1) {
        if(item.tittle.toLowerCase().includes(boxValue)){
         view += `<article class="cards">
         <img src="${item.img}" alt="${item.tittle}">
         <h3>${item.tittle}</h3>
         <p class="price">${item.price} $</p>
         <details>
           <summary >descripcion del producto</summary>
           <p>${item.desc}</p>
         </details>
       </article>`
        }
    }
    containerCards.innerHTML = view;
});




let darkMode = document.querySelector(".icon");

darkMode.onclick = function () {
    document.body.classList.toggle("dark_theme")
    if(document.body.classList.contains("dark_theme")){
        darkMode.innerHTML = "&#xE3A9;";
    } else {
        darkMode.innerHTML = "&#xE3AA;";
    }
};








    