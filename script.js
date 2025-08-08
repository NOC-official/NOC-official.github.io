// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');

// Hamburger menu functionality
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    }

    lastScroll = currentScroll;
});

// Handle window resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Typing animation
typeAnimation(["Dreams", "Quality", "Exagerated Prices", "Stupid Machines", "Planes", "Speed", "Italian Soul", "Tribute To Ivano", "Adrenaline"], 200, 800, "<i>", "</i> Not Only Cars")

async function typeAnimation(texts, type, pause, prefix, suffix) {
    let result = "";
    let output = "";
    for (let j = 0; j < texts.length; j++) {
        for (let i = 0; i < texts[j].length; i++) {
            result += texts[j].substr(i, 1);
            output = prefix + result + suffix;
            document.getElementById("typeAnimation").innerHTML = output;
            await sleep(type);
        }
        await sleep(pause);
        for (let y = 1; y <= texts[j].length; y++) {
            result = texts[j].slice(0, -y);
            output = prefix + result + suffix;
            document.getElementById("typeAnimation").innerHTML = output;
            await sleep(type / 2);
        }
        await sleep(type);
    }
    await typeAnimation(texts, type, pause, prefix, suffix);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}