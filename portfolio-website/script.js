
// Hamburger Menu
function toggleMenu(){
    const menu = document.getElementById("menu");
    if(menu){
        menu.classList.toggle("show");
    }
}

// Dark Mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// Typing Animation (SAFE VERSION)
const text = "Software Developer | Software QA Engineer";
let i = 0;

function typingEffect(){
    const typingElement = document.getElementById("typing");

    if(!typingElement) return;

    if(i < text.length){
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}

// Start typing after page loads
window.addEventListener("load", typingEffect);

// Scroll Reveal Animation (SAFE VERSION)
window.addEventListener("scroll", reveal);

function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}