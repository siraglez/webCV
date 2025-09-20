// ---- Menú hamburguesa ----
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// ---- ScrollReveal Animaciones ----
ScrollReveal().reveal('.experience-card, .education-card, .skill-card', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  interval: 200,
  reset: false
});

ScrollReveal().reveal('header, footer', {
  duration: 1000,
  origin: 'top',
  distance: '30px',
  reset: false
});
