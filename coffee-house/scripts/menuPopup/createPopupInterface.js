import {CreateForm} from './createForm.js'

export class PopupInterface extends CreateForm{
    FOOTER_TEXT = `The cost is not final.
        Download our mobile app to see the final price and place your order.
        Earn loyalty points and enjoy your favorite coffee with up to 20% discount.`
    CLOSEBUTTON_TEXT = 'Close'

    constructor(){
        super()
        this._popUp = this._createPopup();
        this._appendModal();
    }

    set title(title){
        this._title.innerHTML = title;
    }

    set description(description){
        this._description.innerHTML = description;
    }

    set img(src){
        this._img.setAttribute('src', `./assets/images/${src}`)
    }

    set price(price){
        price =  new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(Number(price)),
        this._totalPrice.innerHTML =   `$${price}`
    }

    popUpOpen(){
        this._popUp.classList.add('active');
    }

    closePopup(){
        this._popUp.classList.remove('active');
    }

    _createPopup(){
        const popup = this.createBaseComponent(0, 'article', ['items-popup']);
        const ls = this.createBaseComponent(popup, 'div', ['left-side']);
        const wr = this.createBaseComponent(ls, 'div', ['img-container']);
        this._img = this.createBaseComponent(wr, 'img', ['left-side_img']);
        const rs = this.createBaseComponent(popup, 'div', ['right-side']);
        this._title = this.createBaseComponent(rs,'h3', ['title']);
        this._description = this.createBaseComponent(rs,'p', ['description']);
        rs.append(this.getForm);
        const tp = this.createBaseComponent(rs,'div', ['total-price']);
        const sp = this.createBaseComponent(tp,'span');
        sp.innerHTML = 'Total:';
        this._totalPrice = this.createBaseComponent(tp,'span', ['price']);
        this.createBaseComponent(rs,'footer', ['popup-footer']).innerHTML= this.FOOTER_TEXT;
        this.closeButton = this.createFormComponent(rs,'button', ['close-button'], {type: 'button'}, this.CLOSEBUTTON_TEXT);
        return popup;
    }

    _appendModal(){
        const portal = document.getElementById('portal');
        portal.append(this._popUp);
        this.createBaseComponent(portal, 'div', ['overlow'])
    }

}
