import {BurgerMenu} from '../burger/burger.js'
import { ProductListChange } from '../menuList/productListChange.js';

export class ButtonsList{
    constructor(buttons, pages){
        this.buttons = buttons;
        this.pages = pages;
        this.blockable = this.getBlockableButtons() ;
        this._burgerMenu = new BurgerMenu();
        this._productListChange = new ProductListChange();
        this.buttons.forEach(button => {
            button.addEventListener('click', this.buttonClick.bind(this))
        })
        
        this.initStartPage()
    }

    initStartPage(){
        let params = window.location.search
        let pageID = params.slice(params.indexOf('=')+1);
        let indexPage = this.pages.indexPageByID(pageID);
        if (indexPage){
            this.pages.indexOfcurentPage = indexPage;
            this.pages.toggleVisiblePage();
            this.disableButtons();
           // this._productListChange.initDefaultValue();
        }
    }

    updateURL(str) {
        if (history.pushState) {
            const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            const newUrl = baseUrl + `?page=${str}`;
            history.pushState(null, null, newUrl);
        }
    }

    getBlockableButtons(){
        let result = [];
        this.buttons.forEach(button => {
            if (button.dataset.blockable) result.push(button)
        })
        return result;
    }

    buttonClick(event){
        const button = event.target;
        if (button.dataset.page && button.dataset.page != this.pages.indexOfcurentPage){
            this.pages.curentPage.classList.remove('visible');
            this.pages.curentPage.classList.add('hidden');

            /////////
            if (this.pages.indexOfcurentPage === 0) this._productListChange.initDefaultValue();
            ////////////
            //document.forms.productListChange.select.value = 'coffee';
            //document.forms.productListChange.change();
            ////////////////
           // this.pages.curentPage
                setTimeout(() => {
                    this.pages.indexOfcurentPage = +button.dataset.page;
                    this.pages.toggleVisiblePage();
                    this.pages.curentPage.classList.remove('hidden');
                    this.pages.curentPage.classList.add('visible');
                    this.disableButtons();
                    this.updateURL(this.pages.idCurentPage);
                    if (button.dataset.id) document.location =`#${button.dataset.id}`;
                },800)
        }
        else if (button.dataset.id) document.location =`#${button.dataset.id}`;
        this._burgerMenu.closeBurger();
    }

    disableButtons(){
        this.blockable.forEach(button => {
            if (button.dataset.page == this.pages.indexOfcurentPage) button.classList.add('disable')
            else button.classList.remove('disable');
        })
    }
}





