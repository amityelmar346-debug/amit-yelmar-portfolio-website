
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navigation a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// SCROLL ANIMATION

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".hero-content, .hero-image, .section, .skill, .timeline, .project"
).forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
