const char = document.querySelector(".char")
const clicks = document.querySelector(".clicks")

let amt = 0

char.addEventListener("mousedown",()=>{
    amt++
    clicks.innerHTML = "Clicks: "+amt
    char.style.transform="scale(1.1)"
})
char.addEventListener("mouseup",()=>{
    
    char.style.transform="scale(1)"
})