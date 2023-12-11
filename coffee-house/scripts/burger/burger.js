export function initBurger(){
    const burgerButton = document.getElementById('burgerButton');
    const burgerMenu= document.getElementById('burgerMenu');
    document.querySelector('.burger-button__span1').classList.add('animation')
    burgerButton.addEventListener('click', ()=>{
        burgerMenu.classList.toggle('active');
        burgerButton.classList.toggle('burger-open')
    })
    burgerMenu.addEventListener('click', ()=>{
        burgerMenu.classList.toggle('active');
    })
}