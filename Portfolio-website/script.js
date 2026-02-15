// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
    }
  });
});
