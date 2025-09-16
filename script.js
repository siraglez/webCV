// ScrollReveal
ScrollReveal().reveal('header h1', { duration:1000, origin:'top', distance:'30px' });
ScrollReveal().reveal('header p', { duration:1000, origin:'top', distance:'20px', delay:300 });
ScrollReveal().reveal('.contact span', { duration:1000, origin:'left', distance:'50px', interval:200 });

ScrollReveal().reveal('section h2', { duration:1000, origin:'top', distance:'30px' });
ScrollReveal().reveal('.card', { duration:1000, origin:'bottom', distance:'50px', interval:200 });
ScrollReveal().reveal('#habilidades .skill', { duration:1000, origin:'left', distance:'50px', interval:200 });
ScrollReveal().reveal('.soft-skills', { duration:1000, origin:'bottom', distance:'20px' });
ScrollReveal().reveal('#idiomas li', { duration:1000, origin:'left', distance:'50px', interval:200 });
ScrollReveal().reveal('#certificaciones li', { duration:1000, origin:'left', distance:'50px', interval:200 });

// Animación de las barras de habilidades
const skillBars = document.querySelectorAll('.bar div');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        const height = window.innerHeight;
        if(top < height) bar.style.width = bar.getAttribute('data-width');
    });
});

// Resaltar sección activa en la barra lateral
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#sidebar ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
