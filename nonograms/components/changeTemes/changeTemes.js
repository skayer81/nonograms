import { CreateButton } from "../createComponent/createComponent.js";

export class ChangeTemes extends CreateButton{
    constructor(){
        super();
        this.container = this.createButton(['button'], {type: 'button'}, 'Переключить тему', this.changeTemes); // createButton()
    }

    changeTemes(){
        document.body.classList.toggle('darkTheme');
    }

}