
import {CreateBaseComponent} from './createComponent.js'

class ProductItem extends CreateBaseComponent{
    constructor(img, title, description, price){
        super();
        this.img = img;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    createMenuItem(){
        const li = this.createBaseComponent(0, 'li');
        const article = this.createBaseComponent(li, 'article', ['coffee-item']);
        const imgContainer = this.createBaseComponent(article, 'div', ['img-container']);
        const img = this.createBaseComponent(imgContainer, 'img', 0, );
        img.setAttribute('src', `./assets/images/coffee/${this.img}`);
        img.setAttribute('alt', this.title);
        const textContainer = this.createBaseComponent(article, 'div', ['text-content']);
        this.createBaseComponent(textContainer, 'h3', ['title'], this.title);
        this.createBaseComponent(textContainer, 'p', ['description'], this.description);
        this.createBaseComponent(textContainer, 'p', ['price'], `$${this.price}`);
        return li;
    }

    get item(){
        return this.createMenuItem();
    }
}

export class ProductList extends CreateBaseComponent{
    constructor(product){
        super();
        this.coffee =  product.filter(item => item.category === 'coffee');
    }

    createMenu(){
        const list = this.createBaseComponent(0, 'ul', ['menu-items'])
        for (let elem of this.coffee){
            let item = new ProductItem(elem.img, elem.name, elem.description, elem.price).item;
            // elem.card = item;
            // item.addEventListener('click',  () => {
            //     this.openCard = new CreateItemPopUp(elem).getCard();
            // })
            list.append(item)
        }
        return list
    }

    get listItems(){
        return this.createMenu();
    }
}


class CreateItemPopUp extends CreateBaseComponent{
    constructor(card){
        super();
        this.card = card

    }

    get getCard(){
        console.log(this.card)
    }


}


