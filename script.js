const hamburger = document.querySelector('.nav__toogle-icon')
const hamburgerClass = hamburger.classList
const sidebar = document.querySelector('.nav__sidebar')
const sidebarClass = sidebar.classList

const hamburgerActive = () => {
    hamburgerClass.add('close_icon')
    sidebarClass.remove('close_sidebar')
}

const hamburgerNonactive = () => {
    hamburgerClass.remove('close_icon')
    sidebarClass.add('close_sidebar')
}

hamburger.addEventListener('click', () =>{
    hamburgerClass.forEach((clas) => {
        clas !== 'close_icon' ? hamburgerActive() : hamburgerNonactive()
    })
})



