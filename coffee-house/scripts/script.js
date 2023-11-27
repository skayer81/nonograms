
import {product} from './product.js';
import {Menu} from './menuCreate.js';

const menu = new Menu(product);
const menuPage =  document.getElementById('menu-page');
const homePage = document.getElementById('home-page');
menuPage.querySelector('.container').append(menu.listItems);


const buttons = document.querySelectorAll('[data-page]');
//console.log(buttons);
const pages = ['home', 'menu'];

let curentPage = 0;

buttons.forEach(button => {
    button.addEventListener('click', buttonClick)
    console.log(button)

})

function toggleVisiblePage(){
    menuPage.hidden = !menuPage.hidden;
    homePage.hidden = !homePage.hidden;
}

function buttonClick(){
    if (this.dataset.page && this.dataset.page != pages[curentPage]){
        toggleVisiblePage();
        curentPage = pages.indexOf(this.dataset.page);
        
    }
    if (this.dataset.id){
        document.location =`#${this.dataset.id}`;
    }
    console.log(curentPage, this.dataset.page)

}

