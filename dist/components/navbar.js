export function initNavbar() {
    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbarList = document.querySelector('.navbar__list');
    if (navbarToggle && navbarList) {
        navbarToggle.addEventListener('click', () => {
            navbarList.classList.toggle('active');
            const isActive = navbarList.classList.contains('active');
            navbarToggle.textContent = isActive ? '✕' : '☰';
            navbarToggle.setAttribute('aria-expanded', String(isActive));
        });
    }
}
//# sourceMappingURL=navbar.js.map