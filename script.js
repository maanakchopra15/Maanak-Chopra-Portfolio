/* =========================================
   MOBILE NAVIGATION MENU
   ========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


/* =========================================
   SIMPLE SCROLL REVEAL EFFECT
   ========================================= */

const sections = document.querySelectorAll(".section");

const revealSections = function () {
    sections.forEach(function (section) {

        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;

        if (sectionPosition < screenPosition) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSections);

revealSections();