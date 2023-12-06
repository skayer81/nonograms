
import {CreateBaseComponent} from './createComponent.js'
import {CreateFormComponent} from './createComponent.js'


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



class CreateForm extends CreateFormComponent{
    constructor(){
        super()
        this.form = this.createForm()
    }
    createForm(){
        const form = this.createFormComponent(0, 'form', [], {name:'popUpForm'})// CreateFormComponent(0, 'fofm')
        const fieldsetRadio = this.createBaseComponent(form, 'fieldset');
        this.createBaseComponent(fieldsetRadio, 'legend', [], 'size');
        this.inputSize1 = this.createFormComponent(fieldsetRadio, 'input', [], {type: 'radio', name:'sizes', id:'size1'});
        this.labelSize1 =  this.createFormComponent(fieldsetRadio, 'label', [], {for: 'size1'});
        this.inputSize2 = this.createFormComponent(fieldsetRadio, 'input', [], {type: 'radio', name:'sizes', id:'size2'});
        this.labelSize2 =  this.createFormComponent(fieldsetRadio, 'label', [], {for: 'size2'});
        this.inputSize3 = this.createFormComponent(fieldsetRadio, 'input', [], {type: 'radio', name:'sizes', id:'size3'});
        this.labelSize3 =  this.createFormComponent(fieldsetRadio, 'label', [], {for: 'size3'});

        const fieldsetCheckbox = this.createBaseComponent(form, 'fieldset');
        this.createBaseComponent(fieldsetCheckbox, 'legend', [], 'add');
        this.inputAdd1 = this.createFormComponent(fieldsetCheckbox, 'input', [], {type: 'checkbox', name:'add1', id:'add1'});
        this.labelAdd1 =  this.createFormComponent(fieldsetCheckbox, 'label', [], {for: 'add1'});
        this.inputAdd2 =this.createFormComponent(fieldsetCheckbox, 'input', [], {type: 'checkbox', name:'add2', id:'add2'});
        this.labelAdd2 =  this.createFormComponent(fieldsetCheckbox, 'label', [], {for: 'add2'});
        this.inputAdd3 =this.createFormComponent(fieldsetCheckbox, 'input', [], {type: 'checkbox', name:'add3', id:'add3'});
        this.labelAdd3 =  this.createFormComponent(fieldsetCheckbox, 'label', [], {for: 'add3'});
        return form;
    }

    get getForm(){
      //  console.log('forma', this.form);
        return this.form;
    }

    set labelSize(labels){
        [this.labelSize1.innerHTML, this.labelSize2.innerHTML, this.labelSize3.innerHTML] = labels;
    }

    set labelAdditives(labels){
        [this.labelAdd1.innerHTML, this.labelAdd2.innerHTML, this.labelAdd3.innerHTML] = labels;
    }

    clearForm(){
        this.inputAdd1.checked = false;
        this.inputAdd2.checked = false;
        this.inputAdd3.checked = false;
        this.inputSize1.checked = true;
        
    }
}


// form = new CreateForm().getForm


export class PopupInterface extends CreateForm{// класс для замены данных в попапе и создания попап
    constructor(){
        super()
        this.portal = document.getElementById('portal');
      //  this.formInterface = new CreateForm();
      //  this.form = this.getForm// formInterface.getForm;
        this.popUp = this.createPopup()
        console.log('f2', this.form);
        this.portal.append(this.popUp);
    }
    createPopup(){
        const popup = this.createBaseComponent(0, 'article', ['items-popup']);
        const ls = this.createBaseComponent(popup, 'div', ['left-side']);
        this._img = this.createBaseComponent(ls, 'img', ['left-side']);
        const rs = this.createBaseComponent(popup, 'div', ['right-side']);
        this._title = this.createBaseComponent(rs,'h3', ['title']);
        this._description = this.createBaseComponent(rs,'p', ['description']);
        rs.append(this.getForm);
        const tp = this.createBaseComponent(rs,'div', ['total-price']);
        const sp = this.createBaseComponent(tp,'span');
        sp.innerHTML = 'Total:';
        this._totalPrice = this.createBaseComponent(tp,'span', ['price']);
        this.createBaseComponent(rs,'footer', ['popup-footer']).innerHTML= `The cost is not final. 
            Download our mobile app to see the final price and place your order.
            Earn loyalty points and enjoy your favorite coffee with up to 20% discount.`;
        this._closeButton = this.createFormComponent(rs,'button', ['close-button'], {type: 'button'});
        return popup;
    }

    set title(title){
        this._title.innerHTML = title;
    }

    set description(description){
        this._description.innerHTML = description;
    }

    set totalPrice(totalPrice){
        this._totalPrice.innerHTML = totalPrice;
    }

    set img(src){
        this._img.setAttribute('src', `./assets/images/coffee/${src}`)
    }

    set price(price){
        this._totalPrice.innerHTML = price;
    }

    // set radioLabel(labels){
    //     console.log('label', labels)
    //     [this.formInterface.labelSize1.innerHTML, this.formInterface.labelSize2.innerHTML, this.formInterface.labelSize3.innerHTML] = labels
    // }

    // set checkLabel(labels){
    //     [this.formInterface.labelAdd1, this.formInterface.labelAdd2, this.formInterface.labelAdd2] = labels
   // }
}




class ItemsPopUp {//extends CreateBaseComponent{ //
    constructor(){
      //  super();
     //   this.card = card
        
      //  console.log('portal', this.portal)
        this.interface = new PopupInterface(); 
        this.form = this.interface.getForm;
    }

    // get getItemPopUp(){
    //     console.log(this.card)
    // }

    set card(card){
    //   .. console.log(card)
        this._card = card;
        alert(this._card.name);
    }

    popupInit(card){
        this._card = card;
       // alert(this._card.name);
        this.interface.clearForm()
        this.interface.title = this._card.name;
        this.interface.description = this._card.description;
        this.interface.img = this._card.img;
        this.interface.price = this._card.price;
        this.interface.labelSize = this.getSize() ;
        this.interface.labelAdditives =  this.getAdditives();

    }

    getSize(){
        return [this._card.sizes.s.size, this._card.sizes.m.size, this._card.sizes.l.size]
    }

    getAdditives(){
        return [this._card.additives[0].name, this._card.additives[1].name, this._card.additives[2].name]
    }
}

const itemPopUp = new ItemsPopUp();

export class ProductList extends CreateBaseComponent{
    constructor(product){
        super();
        this.coffee =  product.filter(item => item.category === 'coffee');
    }

    createMenu(){
        const list = this.createBaseComponent(0, 'ul', ['menu-items'])
        for (let elem of this.coffee){
            let item = new ProductItem(elem.img, elem.name, elem.description, elem.price).item;
            item.addEventListener('click',  () => {
                itemPopUp.popupInit(elem);
            })
            list.append(item)
        }
        return list
    }

    get listItems(){
        return this.createMenu();
    }
}



