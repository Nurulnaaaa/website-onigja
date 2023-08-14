const menuBar = document.querySelector(".menu-bar");
const menunav = document.querySelector(".menu-navigation");

menuBar.addEventListener('click', function(){
    menunav.classList.toggle("menu-active");
});
