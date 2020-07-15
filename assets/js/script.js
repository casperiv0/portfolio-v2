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

openMenuBtn.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
  menu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function closeMenu() {
  menu.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

const ageDiv = document.getElementById("age");
const currentAge = new Date().getFullYear() - 2005;
ageDiv.innerText = currentAge;

footerIcon.addEventListener("click", () => {
  document.body.classList.add("rotate");

  setTimeout(() => {
    document.body.classList.remove("rotate");
  }, 4000);
});

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
