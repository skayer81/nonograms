import { CreateButton } from "../createComponent/createComponent.js";

export class ViewModalWindow extends CreateButton{
    constructor(){
        super();
        this.modalWindow = this.createModalWindow()
        this._appendModal();
    }

    addContent(nodes){
       // this.contentContainer.remove()
        this.contentContainer.append(...nodes)
    }

    removeContent(){
        this.contentContainer.innerHTML = '';// remove()// append(node)
    }
    

    closeModalWindow = () => {
        this.modalWindow.classList.remove('active');
      //  document.body.classList.remove('scroll-hidden');
      //  document.body.style.marginRight = '0'
    }

    createModalWindow(){
        const modalWindow = this.createBaseComponent('article', ['modalWindow']);
        this.contentContainer = this.createBaseComponent('div', ['container'], modalWindow);
    //    this._description = this.createBaseComponent(popup,'div', ['description']);
    //    this._word = this.createBaseComponent(popup,'div', ['word']);
    //    const buttonsContainer = this.createBaseComponent(popup,'div', ['buttons']);
        this.createButton(['button'], {type: 'button'}, 'Ok', this.closeModalWindow, modalWindow);
        // this._againButton = this.createFormComponent(buttonsContainer, 'button', ['button'], {type: 'button'}, this.BUTTON_PLAY_TEXT);
        // this._againButton.addEventListener('click', startNewGame);
        // this._againButton.addEventListener('click', this.closePopup);
        // this._closeButton.addEventListener('click', this.closePopup);
         return modalWindow;
    }

    open(){
        this.modalWindow.classList.add('active')
    }


    
    _appendModal(){
        const portal = this.createBaseComponent('div', [], document.body)
        portal.append(this.modalWindow);
        this.overlay =  this.createBaseComponent('div', ['overlay'], portal )
    }



}


// import { CreateFormComponent } from "../createComponent/createComponent.js";

// export class ModalWindow extends CreateFormComponent{

//    // DESCRIPTION_TEXT = 
//    BUTTON_CLOSE_TEXT = 'закрыть окно';
//    BUTTON_PLAY_TEXT = 'сыгранем еще?';
//    WIN_LOSE = ['Ну как так то?(', 'Ты выиграл!']

    // constructor(startNewGame){
    //     super();
    //   //  this.createModalWindow()
    //     this._popUp = this._createPopup(startNewGame);
    //     this._appendModal();
    // }
    
    // set title(title){
    //     this._title.innerHTML = title;
    // }

    // set description(description){
    //     this._description.innerHTML = description;
    // }

    // set word(word){
    //     this._word.innerText = word;
    // }
    // //(this.curetnQuest, this.curentAnswer, true);
    // popUpOpen(quest, answer, isWin){
    //     this._title.innerText = this.WIN_LOSE[Number(isWin)];
    //     this._description.innerText = `${quest} это - `;
    //     this._word.innerText = answer;
    //     this._popUp.classList.add('active');
    //    // document.body.style.marginRight = `${window.innerWidth - document.body.clientWidth}px`;
    //   //  document.body.classList.add('scroll-hidden');
    // }

    // closePopup = () => {
    //     this._popUp.classList.remove('active');
    //   //  document.body.classList.remove('scroll-hidden');
    //   //  document.body.style.marginRight = '0'
    // }

    // createModalWindow(){
    //     this._popup = this.createBaseComponent(document.body, 'div', ['modalWindow']);
    // }

    // _createPopup(startNewGame){
    //     const popup = this.createBaseComponent(0, 'article', ['modalWindow']);
    //     this._title = this.createBaseComponent(popup, 'div', ['title']);
    //     this._description = this.createBaseComponent(popup,'div', ['description']);
    //     this._word = this.createBaseComponent(popup,'div', ['word']);
    //     const buttonsContainer = this.createBaseComponent(popup,'div', ['buttons']);
    //     this._closeButton = this.createFormComponent(buttonsContainer, 'button', ['button'], {type: 'button'}, this.BUTTON_CLOSE_TEXT);
    //     this._againButton = this.createFormComponent(buttonsContainer, 'button', ['button'], {type: 'button'}, this.BUTTON_PLAY_TEXT);
    //     this._againButton.addEventListener('click', startNewGame);
    //     this._againButton.addEventListener('click', this.closePopup);
    //     this._closeButton.addEventListener('click', this.closePopup);
        // const wr = this.createBaseComponent(ls, 'div', ['img-container']);
        // this._img = this.createBaseComponent(wr, 'img', ['left-side_img']);
        // const rs = this.createBaseComponent(popup, 'div', ['right-side']);
        // this._title = this.createBaseComponent(rs,'h3', ['title']);
        // this._description = this.createBaseComponent(rs,'p', ['description']);
        // rs.append(this.getForm);
        // const tp = this.createBaseComponent(rs,'div', ['total-price']);
        // const sp = this.createBaseComponent(tp,'span');
        // sp.innerHTML = 'Total:';
        // this._totalPrice = this.createBaseComponent(tp,'span', ['price']);
        // this.createBaseComponent(rs,'footer', ['popup-footer']).innerHTML= this.FOOTER_TEXT;
        // this.closeButton = this.createFormComponent(rs,'button', ['close-button'], {type: 'button'}, this.CLOSEBUTTON_TEXT);
    //      return popup;
    // }

//     <div class="modalWindow">
//       <div class="title">Вы выиграли!</div>
//       <div class="description">Ответом на вопрос: "что образуется при заморозках после оттепели или дождя?" было слово:</div>
//       <div class="word">ГОЛОЛЕД</div>
//       <div class="buttons">

    
//         <button type="button"> Закрыть </button>
//         <button type="button"> Сыграть еще </button>
//     </div>

// </div>


//}


// import {CreateForm} from './createForm.js'

// export class PopupInterface extends CreateForm{
//     FOOTER_TEXT = `The cost is not final.
//         Download our mobile app to see the final price and place your order.
//         Earn loyalty points and enjoy your favorite coffee with up to 20% discount.`
//     CLOSEBUTTON_TEXT = 'Close'

//     constructor(){
//         super()
//         this._popUp = this._createPopup();
//         this._appendModal();
//     }

//     set title(title){
//         this._title.innerHTML = title;
//     }

//     set description(description){
//         this._description.innerHTML = description;
//     }

//     set img(src){
//         this._img.setAttribute('src', `./assets/images/${src}`)
//     }

//     set price(price){
//         this._price = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2 }).format(Number(price));
//         this._totalPrice.style.transition = '0.4s';
//         this._totalPrice.style.opacity = 0;
//         this._totalPrice.ontransitionend = this._showPrice.bind(this)
//     }

//     _showPrice(){
//         this._totalPrice.innerHTML =   `$${this._price}`
//         this._totalPrice.style.opacity = 1;
//         this._totalPrice.ontransitionend = null;//('transitionend', this.showAnimations)
   
//        }





// }
