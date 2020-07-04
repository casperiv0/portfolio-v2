const ageDiv = document.getElementById("age");
const currentAge = new Date().getFullYear() - 2005;
ageDiv.innerText = currentAge;


const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu-link");

openMenuBtn.addEventListener("click", () => {
    menu.classList.add("active")
})

closeMenuBtn.addEventListener("click", () => {
    closeMenu();
})

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    })
})

function closeMenu() {
    menu.classList.remove("active")
}
window.__forceSmoothScrollPolyfill__ = true;
