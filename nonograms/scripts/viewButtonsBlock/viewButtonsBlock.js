import { CreateButton } from "../createComponent/createComponent.js";

export class ViewButtons extends CreateButton{
    constructor(showSolution){
        super();
        this.container = this.createBaseComponent('div', ['buttons-container'], document.body);
        this.showsolution = this.createButton(['button'], {type: 'button'}, 'Показать решение', showSolution, this.container);
    }

}