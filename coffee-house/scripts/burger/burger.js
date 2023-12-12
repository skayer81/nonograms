export class BurgerMenu{
    constructor(){
        this._burgerButton = document.getElementById('burgerButton');
        this._burgerMenu= document.getElementById('burgerMenu');
        this._listenerInit();
        this._burgerIsOpen = false;
    }

    _listenerInit(){
        this._burgerButton.addEventListener('click', ()=>{
            if (this._burgerIsOpen) this.closeBurger()
            else this.openBurger();
        })
        window.addEventListener('resize', (event) =>{
            if (window.innerWidth > 768 && this._burgerIsOpen) {
                this.closeBurger();
                this._burgerButton.classList.remove('burger-close');
            }
        })
    }

    openBurger(){
        this._burgerMenu.classList.add('active');
        this._burgerButton.classList.remove('burger-close')
        this._burgerButton.classList.add('burger-open')
        this._burgerIsOpen = !this._burgerIsOpen;
        document.body.style.marginRight = `${window.innerWidth - document.body.clientWidth}px`;
        document.body.classList.add('scroll-hidden');
    }

    closeBurger(){
        this._burgerMenu.classList.remove('active');
        this._burgerButton.classList.remove('burger-open')
        this._burgerButton.classList.add('burger-close')
        this._burgerIsOpen = !this._burgerIsOpen;
        document.body.classList.remove('scroll-hidden');
        document.body.style.marginRight = '0'
    }


}