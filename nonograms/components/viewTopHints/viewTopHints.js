import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ViewTopHints extends CreateBaseComponent{
    constructor(){
        super();
        this.container = this.createBaseComponent('div', ['top-hints'])
    }

    createHints(hints){
        this.container.innerHTML = '';
        const arrayOfHints = hints.split('  ').map(element => element.split(' '))
        const maxLength = arrayOfHints.reduce((acc, elem) =>  elem.length > acc ? elem.length : acc ,0);
        arrayOfHints.forEach((element, index) => {
            let columnOfHints = this.createBaseComponent('div', ['column-hints'], this.container);
            if ((index + 1) % 5 === 0) {
                columnOfHints.classList.add('top-hint__border');
            }
            for (let i = element.length; i < maxLength; i++){
                this.createBaseComponent('div', ['top-hint'], columnOfHints);
            }
            element.forEach(item => {
                
                const cell = this.createBaseComponent('div', ['top-hint'], columnOfHints, item);
                cell.addEventListener('click', () => { cell.classList.toggle('cross')})
            })
        }); 
    }
}