import {ProductList} from './productListCreate.js';
import {product} from './product.js';

export class ProductListChange{
    constructor(){
        this.form = document.forms.productListChange;
        this.form.addEventListener('change', this.productListChange.bind(this));
        this.productList = new ProductList(product);
        this.frame = document.getElementById('frame');
      //  this.productListInit();

        this.showProductList();
    }

    productListChange(){
        this.frame.style.transition = '0.5s'
        this.hiddenProductList();
        this.frame.ontransitionend = this.showProductList.bind(this)// addEventListener('transitionend', this.showAnimations) 

      //  showAnimations()
    }

    hiddenProductList(){
        this.frame.style.opacity = 0;
       // console.log('старт анимации')
    }

    showProductList(){
     //   console.log('конец анимации')
      //  console.log(this, 'this')
        this.frame.innerHTML = '';
        this.frame.append(this.productList.getListItems(this.form.select.value));
        this.frame.style.opacity = 1;
         this.frame.ontransitionend = null;//('transitionend', this.showAnimations)

    }







}