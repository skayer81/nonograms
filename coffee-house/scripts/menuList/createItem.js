import {CreateBaseComponent} from '../baseComponentCreate/createComponent.js'

export class ProductItem extends CreateBaseComponent{
    constructor(img, title, description, price, category){
        super();
        this._img = img;
        this._title = title;
        this._description = description;
        this._price = price;
        this._category = category;
    }
    
    get item(){
        return this._createMenuItem();
    }

    _createMenuItem(){
        const li = this.createBaseComponent(0, 'li');
        const article = this.createBaseComponent(li, 'article', ['coffee-item']);
        const imgContainer = this.createBaseComponent(article, 'div', ['img-container']);
        const img = this.createBaseComponent(imgContainer, 'img', 0, );
        img.setAttribute('src', `./assets/images/${this._category}/${this._img}`);
        img.setAttribute('alt', this.title);
        const textContainer = this.createBaseComponent(article, 'div', ['text-content']);
        this.createBaseComponent(textContainer, 'h3', ['title'], this._title);
        this.createBaseComponent(textContainer, 'p', ['description'], this._description);
        this.createBaseComponent(textContainer, 'p', ['price'], `$${this._price}`);
        return li;
    }
}