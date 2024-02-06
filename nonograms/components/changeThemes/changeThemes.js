import { CreateButton } from "../createComponent/createComponent.js";

export class ChangeThemes extends CreateButton{
    constructor(){
        super();
        this.container = this.createButton(['button'], {type: 'button'}, 'Переключить тему', this.changeThemes); // createButton()
    }

    changeThemes(){
        document.body.classList.toggle('darkTheme');
    }

}