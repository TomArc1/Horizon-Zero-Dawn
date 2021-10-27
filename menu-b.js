const menu = document.getElementById('menu');
const burguer = document.getElementById('burguer');

burguer.addEventListener('click', ()=>{
    menu.classList.toggle('nav--show');
})

