
import {CreateBaseComponent} from '../baseComponentCreate/createComponent.js';
import {ProductItem} from './createItem.js';
import {itemPopUp} from '../menuPopup/itemsPopup.js';

export class ProductList extends CreateBaseComponent{
    HIDDEN_ITEM = 'hidden_Item';
    constructor(product){
        super();
        this._product = product;
        this._hiddenItemList = []
    }

    getListItems(newCategory){
        return this._createMenu(newCategory);
    }

    get hiddenItemList(){
        return this._hiddenItemList
    }

    get hiddenClass(){
        return this.HIDDEN_ITEM;
    }

    _createMenu(newCategory){
        this._hiddenItemList = []
        const list = this.createBaseComponent(0, 'ul', ['menu-items'])
        const ListOfCategory = this._initListOfCategory(newCategory);
        let count = 1;
        for (let elem of ListOfCategory){
            let item = new ProductItem(elem.img, elem.name, elem.description, elem.price, newCategory).item;
            item.addEventListener('click',  () => {
                itemPopUp.popupInit(elem);
            })
            if (count > 4) {
                item.classList.add(this.HIDDEN_ITEM);
                this._hiddenItemList.push(item);
            }
            list.append(item);
            count += 1;
        }
        return list
    }

    _initListOfCategory(newCategory){
        return this._product.filter(item => item.category === newCategory);
    }
}



