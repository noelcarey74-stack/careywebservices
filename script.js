document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  if (menuToggle && nav) {
    const closeMenu = () => { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); };
    menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false'); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
  }
  if (!document.querySelector('.mobile-contact-bar')) {
    const bar = document.createElement('div');
    bar.className = 'mobile-contact-bar';
    bar.setAttribute('aria-label','Quick contact');
    bar.innerHTML = '<a class="call" href="tel:+353857800352">Call Noel</a><a class="whatsapp" href="https://wa.me/353857800352" target="_blank" rel="noopener noreferrer">WhatsApp</a>';
    document.body.appendChild(bar);
  }
});
