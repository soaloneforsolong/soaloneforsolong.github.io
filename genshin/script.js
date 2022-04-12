let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .carusel__photos img');

let i = 0;

btn_next.onclick = function(){
    images[i].style.opacity = 0;
    i++
    if(i >= images.length){
    i = 0;
    }
    images[i].style.opacity = 1;
}

btn_prev.onclick = function(){
    images[i].style.opacity = 0;
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.opacity = 1;
}

const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
});

document.querySelectorAll(".menu__list").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
}))