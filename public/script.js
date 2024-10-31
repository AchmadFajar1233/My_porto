const hamburger = document.getElementById('hamburger')
const hamburger1 =  document.getElementById("hamburger-1")
const hamburger2 =  document.getElementById("hamburger-2")

hamburger.addEventListener("click", ()=>{
    hamburger1.classList.toggle("rotate-45")
    hamburger1.classList.toggle("translate-y-1")
    hamburger2.classList.toggle("-rotate-45")
    hamburger2.classList.toggle("-translate-y-1")
})
