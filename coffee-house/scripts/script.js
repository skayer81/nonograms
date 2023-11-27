
import {product} from './product.js';
import {Menu} from './menuCreate.js';
import {PagesAtributes} from './buttons.js';
import {ButtonsList} from './buttons.js'

const menu = new Menu(product);
const menuPage =  document.getElementById('menu-page');
const homePage = document.getElementById('home-page');
menuPage.querySelector('.container').append(menu.listItems);

const pages = new PagesAtributes(document.querySelectorAll('main'));

const buttons = new ButtonsList(document.querySelectorAll('[data-page]'), pages);


