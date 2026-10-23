const intro = document.querySelector('.intro');
setTimeout(() => {
  intro.classList.add('is-done');
  document.body.classList.remove('is-loading');
}, 1500);
intro.addEventListener('transitionend', () => intro.remove());

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.about, .feed h2, .card, .final').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});
