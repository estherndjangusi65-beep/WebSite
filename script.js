
// MOBILE MENU
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

if (btn && nav) {
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
}

// ALL DROPDOWN MENUS
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropBtn = dropdown.querySelector('.dropbtn');

  if (dropBtn) {
    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other dropdowns first
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('open');

          const otherBtn = other.querySelector('.dropbtn');
          if (otherBtn) {
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        }
      });

      const open = dropdown.classList.toggle('open');
      dropBtn.setAttribute('aria-expanded', open);
    });
  }
});

// CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
document.addEventListener('click', () => {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('open');

    const dropBtn = dropdown.querySelector('.dropbtn');
    if (dropBtn) {
      dropBtn.setAttribute('aria-expanded', 'false');
    }
  });
});

// CLOSE MENUS WITH ESCAPE KEY
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('open');

      const dropBtn = dropdown.querySelector('.dropbtn');
      if (dropBtn) {
        dropBtn.setAttribute('aria-expanded', 'false');
      }
    });

    if (nav && btn) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  }
});
