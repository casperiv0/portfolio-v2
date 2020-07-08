const menu = document.querySelector(".menu");
const navIcon = document.querySelector(".nav-icon")
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu-link");

openMenuBtn.addEventListener("click", () => {
    document.body.classList.add("no-scroll")
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
    document.body.classList.remove("no-scroll")
}

const ageDiv = document.getElementById("age");
const currentAge = new Date().getFullYear() - 2005;
ageDiv.innerText = currentAge;