const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu-mobile');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
})