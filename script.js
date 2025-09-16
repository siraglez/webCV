// Animación de las barras de habilidades al hacer scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.bar div');
    const triggerBottom = window.innerHeight * 0.9;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom) {
            skill.style.width = skill.getAttribute('style').split('width:')[1]; // Mantiene el % definido
        }
    });
});
