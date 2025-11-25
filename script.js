// ---- Variables Globales ----
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll("#sidebar nav ul li a");
const sections = document.querySelectorAll("section, header");

// ---- Menú Hamburguesa & Overlay ----
function toggleMenu() {
    const isOpen = sidebar.classList.contains("open");
    if (isOpen) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    } else {
        sidebar.classList.add("open");
        overlay.classList.add("active");
    }
}

// ---- Forzar Inicio arriba al recargar ----
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// Eventos Click
menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // Cierra al hacer click fuera

// Cerrar menú al hacer click en un enlace (útil en móvil)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            toggleMenu();
        }
    });
});

// ---- Active Link on Scroll (Resaltar sección actual) ----
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // -150 para que detecte la sección un poco antes de llegar
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ---- ScrollReveal Animaciones ----
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: false
});

sr.reveal('.hero-text, .hero-subtext', { delay: 200 });
sr.reveal('.contact', { delay: 300 });
sr.reveal('.experience-card', { interval: 200 });
sr.reveal('.education-card', { interval: 200 });
sr.reveal('.skill-card', { interval: 100 });
sr.reveal('#certificaciones li', { interval: 50 });