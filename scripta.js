
let btn = document.querySelector('.navbar-toggler');
let icon = btn.querySelector('.fa-bars');

btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    }
    else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}


var navbar = document.getElementById('navbar');

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const text = document.querySelector(".multiple-text");
const textLoad = () => {
    setTimeout(() => {

        text.textContent = "Front-end Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web-Designer";
    }, 1500);
    setTimeout(() => {
        text.textContent = "Video-Editor";

    }, 3100);
}
textLoad();
setInterval(textLoad, 4600);


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.remove('hp')

        } else {
            entry.target.classList.add('hp')
        }
    });
});

const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(el => observer.observe(el));


var navbar = document.querySelector('#navbar');
var about = document.querySelector('#about');
var skills = document.querySelector('#skills');
var hire = document.querySelector('#hire');
var footer = document.querySelector('#FOOTER');
var education = document.querySelector('#education');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');
var theme = document.querySelector('.theme');
var icn = theme.querySelector('.fa-moon');
