import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ViewLeftHints extends CreateBaseComponent{
    constructor(){
        super()
        this.container = this.createBaseComponent('div', ['left-hints'])
    }

    createHints(hints){
        this.container.innerHTML = '';
        const arrayOfHints = hints.split('  ').map(element => element.split(' '))
       // console.log(arrayOfHints);
        arrayOfHints.forEach(element => {
            let columnOfHints = this.createBaseComponent('div', ['row-hints'], this.container)
            element.forEach(item => {
                this.createBaseComponent('div', ['left-hint'], columnOfHints, item);
            })
        }); 
    }
}