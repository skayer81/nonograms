export class BurgerMenu{
    constructor(){
        this._burgerButton = document.getElementById('burgerButton');
        this._burgerMenu= document.getElementById('burgerMenu');
        this._listenerInit();
    }

    _listenerInit(){
        this._burgerButton.addEventListener('click', ()=>{
            this._burgerMenu.classList.toggle('active');
            this._burgerButton.classList.toggle('burger-open')
        })
        window.addEventListener('resize', (event) =>{
            if (window.innerWidth < 768) this.closeBurger()
        })
    }

    closeBurger(){
        this._burgerMenu.classList.remove('active');
        this._burgerButton.classList.remove('burger-open')
    }


}