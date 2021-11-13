const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

const idToggle = document.getElementById('toggle');

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})
