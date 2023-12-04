import {product} from './product.js';
//import test from './test.json';
//const readFile = fs.readFileSync('jsonex.json', 'utf8');
import {ProductList} from './productListCreate.js';
//import {PagesAtributes} from './buttonsBlock.js';
import {ButtonsList} from './buttonsBlock.js'
import {PagesInterface} from './pagesInterface.js'

const productList = new ProductList(product);
//const menuPage =  document.getElementById('menu-page');
console.log(productList)

document.getElementById('frame').append(productList.listItems);

const pages = new PagesInterface(document.querySelectorAll('main'));

const buttons = new ButtonsList(document.querySelectorAll('[data-page]'), pages);

// let  productListTest;

// function getFile (fileName) {

//     const request = new XMLHttpRequest();
//     request.open('get', fileName);
//     request.onloadend = function() {
//         parse(request.responseText);
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

