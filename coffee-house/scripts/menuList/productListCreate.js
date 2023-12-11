
import {CreateBaseComponent} from '../baseComponentCreate/createComponent.js';
import {ProductItem} from './createItem.js';
import {itemPopUp} from '../menuPopup/itemsPopup.js';

export class ProductList extends CreateBaseComponent{
    constructor(product){
        super();
        this._product = product;
    }

    getListItems(newCategory){
        return this._createMenu(newCategory);
    }

    _createMenu(newCategory){
        const list = this.createBaseComponent(0, 'ul', ['menu-items'])
        const ListOfCategory = this._initListOfCategory(newCategory);
        for (let elem of ListOfCategory){
            let item = new ProductItem(elem.img, elem.name, elem.description, elem.price, newCategory).item;
            item.addEventListener('click',  () => {
                itemPopUp.popupInit(elem);
            })
            list.append(item)
        }
        return list
    }

    _initListOfCategory(newCategory){
        return this._product.filter(item => item.category === newCategory);
    }
}



