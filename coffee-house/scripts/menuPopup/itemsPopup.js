import {PopupInterface} from './createPopupInterface.js'

class ItemsPopUp {//extends CreateBaseComponent{ //
    constructor(){
        this.interface = new PopupInterface();
        this.form = this.interface.getForm;
        //this.closeButton = this.interface.closeButton;
        this.addChangeListener();
    }

    addChangeListener(){
        this.form.addEventListener('change', (event) => {
            let price = Number(this._card.price)
                + Number(this._card.sizes[this.form.sizes.value]['add-price'])
                + (this.form.add1.checked && Number(this._card.additives[0]['add-price']))
                + (this.form.add2.checked && Number(this._card.additives[1]['add-price']))
                + (this.form.add3.checked && Number(this._card.additives[2]['add-price']))
            this.interface.price = price;
        })

        this.interface.closeButton.addEventListener('click', (event) => {
            this.interface.closePopup()})

        this.interface.overlay.addEventListener('click', (event) => {
            this.interface.closePopup()})

    }


    popupInit(card){
        this._card = card;
        this.interface.clearForm()
        this.interface.title = this._card.name;
        this.interface.description = this._card.description;
        this.interface.img = (`${this._card.category}/${this._card.img}`) ;
        this.interface.price = this._card.price;
        this.interface.labelSize = this._getSize(this._card.sizes) ;
        this.interface.labelAdditives =  this._getAdditives(this._card.additives);
        this.interface.popUpOpen();
    }

    _getSize(sizes){
        return [sizes.s.size, sizes.m.size, sizes.l.size]
    }

    _getAdditives(add){
        return [add[0].name, add[1].name, add[2].name]
    }
}

export const itemPopUp = new ItemsPopUp();