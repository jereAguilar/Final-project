const bars = document.getElementById("bars");
const menu = document.getElementById("nav");

bars.addEventListener("click",() => {
    menu.classList.toggle("menu__show");
    bars.classList.toggle("color-bars");
});
