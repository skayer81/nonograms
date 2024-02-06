import {ProductList} from './productListCreate.js';
import {product} from './product.js';

export class ProductListChange{

    LOAD_BUTTON_HIDDEN = 'load_button-hidden';
    DEFAULT_VALUE = 'coffee';

    constructor(){
        this.form = document.forms.productListChange;
        this.form.addEventListener('change', this.productListChange.bind(this));
        this._loadMoreButton = document.getElementById('ContentLoadButton');
        this._loadMoreButton.addEventListener('click', this._loadMoreItems.bind(this))
        this.productList = new ProductList(product);
        this.frame = document.getElementById('frame');
        this.showProductList();
    }

    productListChange(){
      //console.log('меняем категорию', this.form.select.value)
        this.frame.style.transition = '0.5s'
        this.hiddenProductList();
        this.frame.ontransitionend = this.showProductList.bind(this)// addEventListener('transitionend', this.showAnimations) 
    }

    hiddenProductList(){
        this.frame.style.opacity = 0;
    }

    showProductList(){
        this.frame.innerHTML = '';
        this.frame.append(this.productList.getListItems(this.form.select.value));
       // console.log('аппендим', this.productList.getListItems(this.form.select.value))
        this.frame.style.opacity = 1;
        this.frame.ontransitionend = null;//('transitionend', this.showAnimations)
        if (this.productList.hiddenItemList.length > 0){
          this._loadMoreButton.classList.remove(this.LOAD_BUTTON_HIDDEN)
        }
        else this._loadMoreButton.classList.add(this.LOAD_BUTTON_HIDDEN)
      
    }

    _loadMoreItems(){
      for(let item of this.productList.hiddenItemList){
        item.classList.remove(this.productList.hiddenClass);
      }
      this._loadMoreButton.classList.add(this.LOAD_BUTTON_HIDDEN)
    }

    initDefaultValue(){
      this.form.select.value = this.DEFAULT_VALUE;
      console.log(this.form.select.value);
      this.showProductList();
    }
}