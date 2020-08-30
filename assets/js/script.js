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
const viewOlderBtn = document.querySelector(".view-older-btn");
const timelineLinks = document.querySelectorAll(".timeline-link");
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

// Make sure all timeline-links open in a new tab
timelineLinks.forEach((link) => {
  link.target = "_blank";
  link.rel = "noreferrer noopener"
})

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
viewOlderBtn.addEventListener("click", updateTimeline);

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

function updateTimeline() {
  if (viewOlderBtn.classList.contains("active")) {
    document.getElementById("view-older").classList.remove("active");
    document.querySelector(".view-older-btn p").textContent = "View older";
    viewOlderBtn.classList.remove("active");
  } else {
    document.getElementById("view-older").classList.add("active");
    document.querySelector(".view-older-btn p").textContent = "View less";
    viewOlderBtn.classList.add("active");
  }
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
