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
const sections = document.querySelectorAll(".section");
const navbar = document.getElementById("nav-bar");
const sticky = navbar.offsetTop;
const observer = new IntersectionObserver(callback, {
  threshold: 0.6,
  rootMargin: "0px",
});

function callback(entries) {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const link = document.querySelector(`[data-page=${id}]`);

    if (entry.isIntersecting) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

window.onscroll = function shiftNav() {
  if (window.pageYOffset > sticky) {
    navbar.style.boxShadow = "0 2px 2px rgba(0, 0, 0, 0.2)";
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

// footer
footerIcon.addEventListener("click", () => {
  document.body.classList.add("rotate");

  setTimeout(() => {
    document.body.classList.remove("rotate");
  }, 4000);
});

// age
const ageDiv = document.getElementById("age");
const currentAge = new Date().getFullYear() - 2005;
ageDiv.innerText = currentAge;
