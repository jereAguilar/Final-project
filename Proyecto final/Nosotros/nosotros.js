const bars = document.getElementById("bars");
const menu = document.getElementById("nav");

bars.addEventListener("click",() => {
    menu.classList.toggle("menu__hide");
    bars.classList.toggle("hide-bars");
});