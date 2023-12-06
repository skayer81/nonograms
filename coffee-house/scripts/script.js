import {product} from './product.js';
import {ProductList} from './productListCreate.js';
import {ButtonsList} from './buttonsBlock.js';
import {PagesInterface} from './pagesInterface.js';
import {PopupInterface} from './productListCreate.js';

const productList = new ProductList(product);
//const popUp = new PopupInterface()
//const menuPage =  document.getElementById('menu-page');
//console.log(productList)

document.getElementById('frame').append(productList.listItems);

const pages = new PagesInterface(document.querySelectorAll('main'));

const buttons = new ButtonsList(document.querySelectorAll('[data-page]'), pages);

// let  productList;

// function getFile (fileName) {
//     const request = new XMLHttpRequest();
//     request.open('get', fileName);
//     request.onloadend = function() {
//         productListT = JSON.parse(request.responseText);
//     }
//     request.send();
// }

// getFile('./scripts/test.json');

// function parse(obj) {
//     productListTest = JSON.parse(obj);
//     console.log(productListTest);
// }

// const test = getElementById('test')
// const svg =  test.getSVGDocument();
// console.log(svg)

