let wall1 = document.getElementById("wall1");
let wall2 = document.getElementById("wall2");
let wall3 = document.getElementById("wall3");

window.addEventListener('scroll', function(){
    const value = window.scrollY;

    wall1.style.top = value * -.07 + 'px';
    wall2.style.top = value * .1 + 'px';
    wall3.style.top = value * -.12 + 'px';
})