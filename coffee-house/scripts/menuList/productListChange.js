import {ProductList} from './productListCreate.js';
import {product} from './product.js';

export class ProductListChange{

    LOAD_BUTTON_HIDDEN = 'load_button-hidden';

    constructor(){
        this.form = document.forms.productListChange;
        this.form.addEventListener('change', this.productListChange.bind(this));
        this._loadMoreButton = document.getElementById('ContentLoadButton');
        this._loadMoreButton.addEventListener('click', this._loadMoreItems.bind(this))
        this.productList = new ProductList(product);
        this.frame = document.getElementById('frame');
      //  this.productListInit();

        this.showProductList();
    }

    productListChange(){
        this.frame.style.transition = '0.5s'
        this.hiddenProductList();
        this.frame.ontransitionend = this.showProductList.bind(this)// addEventListener('transitionend', this.showAnimations) 
       // console.log(this.productList.hiddenItemList.length)

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
        console.log(this.productList.hiddenItemList.length);
        if (this.productList.hiddenItemList.length > 0){
          console.log('удаляем класс')
          this._loadMoreButton.classList.remove(this.LOAD_BUTTON_HIDDEN)
        }
        else this._loadMoreButton.classList.add(this.LOAD_BUTTON_HIDDEN)
      
    }

    _loadMoreItems(){
      //console.log('клик')
      for(let item of this.productList.hiddenItemList){
        item.classList.remove(this.productList.hiddenClass);
      }
      this._loadMoreButton.classList.add(this.LOAD_BUTTON_HIDDEN)
    }
}