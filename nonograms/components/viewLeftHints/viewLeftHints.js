import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ViewLeftHints extends CreateBaseComponent{
    constructor(){
        super()
        this.container = this.createBaseComponent('div', ['left-hints'])
    }

    createHints(hints){
        this.container.innerHTML = '';
        const arrayOfHints = hints.split('  ').map(element => element.split(' '))
        const maxLength = arrayOfHints.reduce((acc, elem) =>  elem.length > acc ? elem.length : acc ,0);
    //    arrayOfHints = arrayOfHints.map(element => element)
       // console.log(arrayOfHints, maxLength);
        arrayOfHints.forEach((element,index) => {
            let columnOfHints = this.createBaseComponent('div', ['row-hints'], this.container);
            if ((index + 1) % 5 === 0) {
                columnOfHints.classList.add('left-hint__border');
            }
            for (let i = element.length; i < maxLength; i++){
                this.createBaseComponent('div', ['left-hint'], columnOfHints);
            }
            element.forEach(item => {
                this.createBaseComponent('div', ['left-hint'], columnOfHints, item);
            })
        }); 
    }
}