const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar");
burger.addEventListener("click", function () {
    nav.classList.toggle("appear");
    burger.classList.toggle("close");
});
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
        nav.classList.toggle("appear");
        burger.classList.toggle("close");

    });
});

