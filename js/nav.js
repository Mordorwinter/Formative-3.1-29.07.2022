console.log('nav');
const menuBtn = document.getElementsByClassName('nav_main_menu')[0];
const navResponsive = document.getElementsByClassName('nav_responsive')[0];

menuBtn.addEventListener('click', () => {
    console.log('menu clicked')
    navResponsive.classList.toggle('active');
})