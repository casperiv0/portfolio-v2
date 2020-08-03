const config = {
  mailService: "default_service",
  templateId: "template_GgjP66Zj",
  contactForm: "#contact-form",
};

const menu = document.querySelector(".menu");
const footerIcon = document.querySelector(".footer-icon");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu-link");
const navbar = document.getElementById("nav-bar");
const sticky = navbar.offsetTop;

window.onscroll = function shiftNav() {
  if (window.pageYOffset > sticky) {
    navbar.style.boxShadow = "0 2px 2px rgba(35,37,53,0.8)";
    navbar.style.height = "60px";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.height = "100px";
  }
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function openMenu() {
  document.body.classList.add("no-scroll");
  menu.classList.add("active");
  document.querySelector(".menu-links").classList.add("fade-down");
}

function closeMenu() {
  menu.classList.remove("active");
  document.body.classList.remove("no-scroll");
  document.querySelector(".menu-links").classList.remove("fade-down");
}

// contact form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("msg");

  emailjs
    .sendForm(config.mailService, config.templateId, config.contactForm)
    .then((res) => {
      if (res.status === 200) {
        message.style.display = "block";
        message.textContent = "Successfully send message!";

        setTimeout(() => {
          message.style.display = "none";
        }, 10000);
      }
    });
});

// age
const ageDiv = document.getElementById("age");
const currentAge = new Date().getFullYear() - 2005;
ageDiv.textContent = currentAge;
