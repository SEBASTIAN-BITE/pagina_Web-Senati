// JavaScript con efectos visuales adicionales
document.getElementById("btnSaludo").addEventListener("click", () => {
  alert("✨ ¡Bienvenido al nuevo estilo! Todo funciona perfectamente.");
  
  // Efecto de feedback visual en el botón
  const btn = document.getElementById("btnSaludo");
  btn.style.transform = "scale(0.98)";
  setTimeout(() => { 
    btn.style.transform = ""; 
  }, 150);
});

// Efecto de aparición suave para las tarjetas (opcional)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar animación inicial a las tarjetas
document.querySelectorAll('.custom-card').forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Efecto de scroll para el navbar (cambia opacidad)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 20, 0.95)';
    navbar.style.backdropFilter = 'blur(16px)';
  } else {
    navbar.style.background = 'rgba(10, 10, 20, 0.85)';
    navbar.style.backdropFilter = 'blur(12px)';
  }
});