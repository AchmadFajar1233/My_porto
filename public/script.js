const hamburgerMenu = document.getElementById("hamburgerIcon");
const hamburger1 = document.getElementById("hamburger1");
const hamburger2 = document.getElementById("hamburger2");
const nav = document.querySelector('nav')

hamburgerMenu.addEventListener('click', () =>{
    hamburger1.classList.toggle('rotate-[23deg]')
    hamburger2.classList.toggle('-rotate-[23deg]')

    nav.classList.toggle('-translate-y-full')
})
