let darkMode = document.querySelector(".icon");

darkMode.onclick = function () {
    document.body.classList.toggle("dark_theme")
    if(document.body.classList.contains("dark_theme")){
        darkMode.innerHTML = "&#xE3A9;";
    } else {
        darkMode.innerHTML = "&#xE3AA;";
    }
};


// este codigo desplegara el panel lateral en mediaquerie menor s 760px

let panel =  document.querySelector('.panel');

let menu = document.querySelector('.menu');
menu.addEventListener('click', ()=>{

    panel.classList.toggle('show');
})