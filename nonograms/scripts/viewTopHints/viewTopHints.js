import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ViewTopHints extends CreateBaseComponent{
    constructor(){
        super();
        this.container = this.createBaseComponent('div', ['top-hints'])
    }

    createHints(hints){
        const arrayOfHints = hints.split('  ').map(element => element.split(' '))
        arrayOfHints.forEach(element => {
            let columnOfHints = this.createBaseComponent('div', ['column-hints'], this.container)
            element.forEach(item => {
                this.createBaseComponent('div', ['top-hint'], columnOfHints, item);
            })
        }); 
    }
}