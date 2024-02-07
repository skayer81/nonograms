import { CreateButton } from "../createComponent/createComponent.js";

export class ViewModalWindow extends CreateButton{
    constructor(){
        super();
        this.modalWindow = this.createModalWindow()
        this._appendModal();
    }

    addContent(nodes){
        this.contentContainer.append(...nodes)
    }

    removeContent(){
        this.contentContainer.innerHTML = '';
    }
    

    closeModalWindow = () => {
        this.modalWindow.classList.remove('active');
    }

    createModalWindow(){
        const modalWindow = this.createBaseComponent('article', ['modalWindow']);
        this.contentContainer = this.createBaseComponent('div', ['container'], modalWindow);
        this.createButton(['button'], {type: 'button'}, 'Ok', this.closeModalWindow, modalWindow);
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
