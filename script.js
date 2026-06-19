// Respect reduced-motion: keep the dashed serve line, drop the moving ball.
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.ball-dot').forEach((el) => el.remove());
}
