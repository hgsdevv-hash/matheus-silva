const intro = document.querySelector('.intro');
setTimeout(() => {
  intro.classList.add('is-done');
  document.body.classList.remove('is-loading');
}, 2000);
intro.addEventListener('transitionend', () => intro.remove());

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.steps li, .sobre, .treinos h2, .card, .final').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// vídeos do feed só carregam e tocam quando aparecem na tela
const vo = new IntersectionObserver(entries => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting) {
      if (!v.src) v.src = v.dataset.src;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  });
}, { threshold: .4 });
document.querySelectorAll('video[data-src]').forEach(v => vo.observe(v));
