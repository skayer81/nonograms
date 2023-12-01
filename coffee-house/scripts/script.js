import {product} from './product.js';
import {ProductList} from './productListCreate.js';
//import {PagesAtributes} from './buttonsBlock.js';
import {ButtonsList} from './buttonsBlock.js'
import {PagesInterface} from './pagesInterface.js'

const productList = new ProductList(product);
const menuPage =  document.getElementById('menu-page');
console.log(productList)

menuPage.querySelector('.container').append(productList.listItems);

const pages = new PagesInterface(document.querySelectorAll('main'));

const buttons = new ButtonsList(document.querySelectorAll('[data-page]'), pages);


