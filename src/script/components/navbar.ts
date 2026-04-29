export function initNavbar() {

  const navbarToggle = document.querySelector<HTMLButtonElement>('.navbar__toggle');
  const navbarList = document.querySelector<HTMLUListElement>('.navbar__list');

  if (navbarToggle && navbarList) {
    navbarToggle.addEventListener('click', () => {
      navbarList.classList.toggle('active');

      const isActive = navbarList.classList.contains('active');

      navbarToggle.textContent = isActive ? '✕' : '☰';
      navbarToggle.setAttribute('aria-expanded', String(isActive));
    });
  }
}