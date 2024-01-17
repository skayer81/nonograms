import { CreateFormComponent } from "../createComponent/createComponent.js";

export class ModalWindow extends CreateFormComponent{

   // DESCRIPTION_TEXT = 
   BUTTON_CLOSE_TEXT = 'закрыть окно';
   BUTTON_PLAY_TEXT = 'сыгранем еще?';
   WIN_LOSE = ['Ну как так то?(', 'Ты выиграл!']

    constructor(startNewGame){
        super();
        this._popUp = this._createPopup(startNewGame);
        this._appendModal();
    }
    
    popUpOpen(quest, answer, isWin){
        this._title.innerText = this.WIN_LOSE[Number(isWin)];
        this._description.innerText = `${quest} это - `;
        this._word.innerText = answer;
        this._popUp.classList.add('active');
        this._againButton.setAttribute('tabindex', 1);
        this._againButton.disabled = false;
    }

    closePopup = () => {
        this._againButton.setAttribute('tabindex', -1);
        this._popUp.classList.remove('active');
        this._againButton.disabled = true;
    }

    _createPopup(startNewGame){
        const popup = this.createBaseComponent(0, 'article', ['modalWindow']);
        this._title = this.createBaseComponent(popup, 'div', ['title']);
        this._description = this.createBaseComponent(popup,'div', ['description']);
        this._word = this.createBaseComponent(popup,'div', ['word']);
        const buttonsContainer = this.createBaseComponent(popup,'div', ['buttons']);
     //   this._closeButton = this.createFormComponent(buttonsContainer, 'button', ['button'], {type: 'button'}, this.BUTTON_CLOSE_TEXT);
        this._againButton = this.createFormComponent(buttonsContainer, 'button', ['button'], {type: 'button', disable: 'true'}, this.BUTTON_PLAY_TEXT);
      //  this._againButton.setAttribute('disable');
        this._againButton.addEventListener('click', startNewGame);
        this._againButton.addEventListener('click', this.closePopup);
        return popup;
    }

    _appendModal(){
        const portal = this.createBaseComponent(document.body, 'div')
        portal.append(this._popUp);
        this.overlay =  this.createBaseComponent(portal, 'div', ['overlay'])
    }

}