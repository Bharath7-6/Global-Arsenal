// ===== TYPEWRITER EFFECT =====
let text = "GLOBAL ARSENAL";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;


// ===== ENTER KEY FIX (IMPORTANT) =====
document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("codeInput");

    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            checkCode();
        }
    });

});


// ===== CANVAS INTRO PARTICLE EFFECT =====
const canvas = document.getElementById("introCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 3,
            d: Math.random() * 4
        });
    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            ctx.beginPath();
            ctx.fillStyle = "#00c6ff";
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.y += p.d;

            if (p.y > canvas.height) p.y = 0;

        });

        requestAnimationFrame(draw);
    }

    draw();
}


// ===== UNLOCK FUNCTION =====
function checkCode() {

    let input = document.getElementById("codeInput").value.toLowerCase();

    if (input === "boom") {

        document.getElementById("intro").style.display = "none";
        document.getElementById("main").style.display = "block";

    } else {

        document.getElementById("errorMsg").innerHTML = "Wrong Code!";

    }
}


// ===== NAVBAR HIDE/SHOW + SCROLL EFFECTS =====
let lastScroll = 0;

window.addEventListener("scroll", () => {

    let nav = document.getElementById("navbar");
    let now = window.scrollY;

    if (now > lastScroll) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }

    lastScroll = now;

    reveal();
    updateScrollProgress();
    sectionHighlight();

});


// ===== REVEAL ANIMATION =====
function reveal() {

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {

        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }

    });
}


// ===== BACKGROUND PARTICLES (ONLY ONE FUNCTION NOW) =====
function createBackgroundParticles() {

    let container = document.getElementById("bgParticles");

    if (!container) return;

    for (let i = 0; i < 90; i++) {

        let dot = document.createElement("div");
        dot.classList.add("bgDot");

        let size = Math.random() * 4 + 2;

        dot.style.width = size + "px";
        dot.style.height = size + "px";

        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";

        dot.style.animationDuration = Math.random() * 12 + 6 + "s";

        container.appendChild(dot);
    }
}

createBackgroundParticles();


// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {

    let progress = document.getElementById("progressBar");

    if (!progress) return;

    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (scrollTop / height) * 100;

    progress.style.width = scrolled + "%";
}


// ===== SECTION HIGHLIGHT EFFECT =====
function sectionHighlight() {

    let sections = document.querySelectorAll(".section");

    sections.forEach(sec => {

        let top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 150) {
            sec.classList.add("sectionActive");
        }

    });

}


// ===== HERO PARALLAX EFFECT (ONLY ONE CLEAN VERSION) =====
document.addEventListener("mousemove", function (e) {

    let hero = document.querySelector(".heroBg");

    if (!hero) return;

    let x = (e.clientX / window.innerWidth - 0.5) * 15;
    let y = (e.clientY / window.innerHeight - 0.5) * 15;

    hero.style.transform =
        `scale(1.1) translate(${x}px, ${y}px)`;

});
