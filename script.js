// ScrollReveal para animaciones
ScrollReveal().reveal('header h1', { duration:1000, origin:'top', distance:'30px' });
ScrollReveal().reveal('header p', { duration:1000, origin:'top', distance:'20px', delay:200 });
ScrollReveal().reveal('.contact span', { duration:1000, origin:'left', distance:'50px', interval:200 });
ScrollReveal().reveal('section h2', { duration:1000, origin:'top', distance:'30px' });
ScrollReveal().reveal('.card', { duration:1000, origin:'bottom', distance:'50px', interval:200, reset:false });
ScrollReveal().reveal('.skills .skill', { duration:1000, origin:'left', distance:'50px', interval:200, reset:false });
ScrollReveal().reveal('.soft-skills', { duration:1000, origin:'bottom', distance:'20px', delay:200 });
ScrollReveal().reveal('#idiomas li, #certificaciones li', { duration:1000, origin:'left', distance:'50px', interval:200, reset:false });

// Animación de las barras de habilidades
const skillBars = document.querySelectorAll('.bar div');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight) bar.style.width = bar.getAttribute('data-width');
    });
});

// Resaltar sección activa en la barra lateral
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#sidebar ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // margen para navbar
        if(pageYOffset >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});
