const menuBtn = document.querySelector('.menu a');
const navBar = document.querySelector('.hidden_nav');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});