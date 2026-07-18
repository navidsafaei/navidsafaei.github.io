// Terminal typing effect
const phrases = ['I automate infrastructure...', 'I scale platforms...', 'I optimize pipelines...', 'I ship with confidence...'];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = phrases[phraseIndex];
  typedEl.textContent = deleting ? current.slice(0, --charIndex) : current.slice(0, ++charIndex);

  if (!deleting && charIndex === current.length) {
    setTimeout(() => { deleting = true; type(); }, 1800);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

// Mobile menu
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden'))
);

// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
