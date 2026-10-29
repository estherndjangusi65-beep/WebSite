const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});

// Services dropdown
const dropdown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.dropbtn');

if (dropdown && dropBtn) {
  dropBtn.addEventListener('click', () => {
    const open = dropdown.classList.toggle('open');
    dropBtn.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      dropBtn.setAttribute('aria-expanded', 'false');
    }
  });
}