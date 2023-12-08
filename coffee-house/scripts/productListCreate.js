
import {CreateBaseComponent} from './createComponent.js'
import {CreateFormComponent} from './createComponent.js'


class ProductItem extends CreateBaseComponent{
    constructor(img, title, description, price, category){
        super();
        this.img = img;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    createMenuItem(){
        const li = this.createBaseComponent(0, 'li');
        const article = this.createBaseComponent(li, 'article', ['coffee-item']);
        const imgContainer = this.createBaseComponent(article, 'div', ['img-container']);
        const img = this.createBaseComponent(imgContainer, 'img', 0, );
        img.setAttribute('src', `./assets/images/${this.category}/${this.img}`);
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
        this.createBaseComponent(fieldsetRadio, 'legend', [], 'Size');
        this.inputSize1 = this.createFormComponent(fieldsetRadio, 'input', [], {type: 'radio', name:'sizes', id:'size1', value: 's'});
        this.labelSize1 =  this.createFormComponent(fieldsetRadio, 'label', [], {for: 'size1'});
        this.inputSize2 = this.createFormComponent(fieldsetRadio, 'input', [], {type: 'radio', name:'sizes', id:'size2', value: 'm'});
        this.labelSize2 =  this.createFormComponent(fieldsetRadio, 'label', [], {for: 'size2'});
        this.inputSize3 = this.createFormComponent(fieldsetRadio, 'input', [], {type: 'radio', name:'sizes', id:'size3', value: 'l'});
        this.labelSize3 =  this.createFormComponent(fieldsetRadio, 'label', [], {for: 'size3'});

        const fieldsetCheckbox = this.createBaseComponent(form, 'fieldset');
        this.createBaseComponent(fieldsetCheckbox, 'legend', [], 'Additives');
        this.inputAdditive1 = this.createFormComponent(fieldsetCheckbox, 'input', [], {type: 'checkbox', name:'add1', id:'add1'});
        this.labelAdditive1 =  this.createFormComponent(fieldsetCheckbox, 'label', [], {for: 'add1'});
        this.inputAdditive2 =this.createFormComponent(fieldsetCheckbox, 'input', [], {type: 'checkbox', name:'add2', id:'add2'});
        this.labelAdditive2 =  this.createFormComponent(fieldsetCheckbox, 'label', [], {for: 'add2'});
        this.inputAdditive3 =this.createFormComponent(fieldsetCheckbox, 'input', [], {type: 'checkbox', name:'add3', id:'add3'});
        this.labelAdditive3 =  this.createFormComponent(fieldsetCheckbox, 'label', [], {for: 'add3'});
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
        [this.labelAdditive1.innerHTML, this.labelAdditive2.innerHTML, this.labelAdditive3.innerHTML] = labels;
    }

    clearForm(){
        this.inputAdditive1.checked = false;
        this.inputAdditive2.checked = false;
        this.inputAdditive3.checked = false;
        this.inputSize1.checked = true;
     //   this.clearLabelTEST()
    }
    // clearLabelTEST(){
    //     [this.labelSize1.innerHTML, this.labelSize2.innerHTML, this.labelSize3.innerHTML] = ['','',''];
    //     [this.labelAdditive1.innerHTML, this.labelAdditive2.innerHTML, this.labelAdditive3.innerHTML] = ['','','']
    // }
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
        this._img.setAttribute('src', `./assets/images/${src}`)
    }

    set price(price){
        
      //  addEventListener('click', () => {console.log(123)})
   //   window.Intl

// if (window.Intl && typeof window.Intl === "object"){  
//     console.log("Internationalization API поддерживается");
// } 
// else {  
//     console.log("Internationalization API не поддерживается");
price =  new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(Number(price)),


// }
// console.log(
//     new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 2, minimumFractionDigits: 2 }).format(
//       number,
//     ),
//   );
       
        this._totalPrice.innerHTML =   `$${price}`

      //  this._totalPrice.innerHTML = String(price).padEnd;
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
        this.addChangeListener();
    }

    // get getItemPopUp(){
    //     console.log(this.card)
    // }

    addChangeListener(){
        // for (let i = 0; i <= this.form.elements.length - 1; i ++){
        //     this.form.elements[i].addEventListener('change', (event) => {
        //         console.log(event);
        //     })
        //    // console.log(i, this.form.elements[i])
        // }
        this.form.addEventListener('change', (event) => {
         //   this.interface.price = 
             //   this._card.price + this.size[this.form.sizes.value].add-price
           // console.log('форма поменялась');
           let price = Number(this._card.price) 
           + Number(this._card.sizes[this.form.sizes.value]['add-price'])
           + (this.form.add1.checked && Number(this._card.additives[0]['add-price']))
           + (this.form.add2.checked && Number(this._card.additives[1]['add-price']))
           + (this.form.add3.checked && Number(this._card.additives[2]['add-price']))
           console.log(price);
           this.interface.price = price
            // console.log('форма размер', this.form.sizes.value);
            // console.log('форма добавка 1', this.form.add1.checked);
            // console.log('форма добавка 2', this.form.add2.checked);
            // console.log('форма добавка 3', this.form.add3.checked);
        })
    }

// ///////////////////////////////////////кофе


// {
//     "sizes": {
//       "s": {
//         "size": "200 ml",
//         "add-price": "0.00"
//       },
//       "m": {
//         "size": "300 ml",
//         "add-price": "0.50"
//       },
//       "l": {
//         "size": "400 ml",
//         "add-price": "1.00"
//       }
//     },
//     "additives": [
//       {
//         "name": "Sugar",
//         "add-price": "0.50"
//       },
//       {
//         "name": "Cinnamon",
//         "add-price": "0.50"
//       },
//       {
//         "name": "Syrup",
//         "add-price": "0.50"
//       }
//     ]
//   }
// ////////////////////чай
// {
//     "sizes": {
//       "s": {
//         "size": "200 ml",
//         "add-price": "0.00"
//       },
//       "m": {
//         "size": "300 ml",
//         "add-price": "0.50"
//       },
//       "l": {
//         "size": "400 ml",
//         "add-price": "1.00"
//       }
//     },
//     "additives": [
//       {
//         "name": "Sugar",
//         "add-price": "0.50"
//       },
//       {
//         "name": "Lemon",
//         "add-price": "0.50"
//       },
//       {
//         "name": "Syrup",
//         "add-price": "0.50"
//       }
//     ]
//   },

////////////////////////// десерт
// {

//     "sizes": {
//       "s": {
//         "size": "50 g",
//         "add-price": "0.00"
//       },
//       "m": {
//         "size": "100 g",
//         "add-price": "0.50"
//       },
//       "l": {
//         "size": "200 g",
//         "add-price": "1.00"
//       }
//     },
//     "additives": [
//       {
//         "name": "Berries",
//         "add-price": "0.50"
//       },
//       {
//         "name": "Nuts",
//         "add-price": "0.50"
//       },
//       {
//         "name": "Jam",
//         "add-price": "0.50"
//       }
//     ]
//   },


///////////////////////////////////






    set card(card){
    //   .. console.log(card)
        this._card = card;
        alert(this._card.name);
    }

    popupInit(card){
        this._card = card;
        //this.basePrice = 
       // alert(this._card.name);
        this.interface.clearForm()
        
        this.interface.title = this._card.name;
        this.interface.description = this._card.description;
        this.interface.img = (`${this._card.category}/${this._card.img}`) ;
        this.interface.price = this._card.price;
        this.interface.labelSize = this.getSize() ;
        this.interface.labelAdditives =  this.getAdditives();
        console.log('форма размер', this.form.sizes);
        console.log('форма добавки', this.form.add1);
        console.log('форма добавки', this.form.add2);
        console.log('форма добавки', this.form.add3);
        console.log('элементы', this.form.elements);
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
        this.product = product;
       // this.coffee =  product.filter(item => item.category === 'coffee');
    }

    _createMenu(newCategory){
        const list = this.createBaseComponent(0, 'ul', ['menu-items'])
        const ListOfCategory = this.initListOfCategory(newCategory);
        for (let elem of ListOfCategory){
            let item = new ProductItem(elem.img, elem.name, elem.description, elem.price, newCategory).item;
            item.addEventListener('click',  () => {
                itemPopUp.popupInit(elem);
            })
            list.append(item)
        }
        return list
    }

    getListItems(newCategory){
        return this._createMenu(newCategory);
    }

    initListOfCategory(newCategory){
        return this.product.filter(item => item.category === newCategory);
    }

   // set curentValue
}



