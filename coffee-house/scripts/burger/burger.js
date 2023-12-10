export function initBurger(){
    const burgerButton = document.getElementById('burgerButton');
    const burgerMenu= document.getElementById('burgerMenu');
    burgerButton.addEventListener('click', ()=>{
        burgerMenu.classList.toggle('active');
    })
    burgerMenu.addEventListener('click', ()=>{
        burgerMenu.classList.toggle('active');
    })
}