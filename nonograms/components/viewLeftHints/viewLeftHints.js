import { CreateBaseComponent } from "../createComponent/createComponent.js";
import { EventEmitter } from "../viewField/eventEmmiter.js";

export class ViewLeftHints extends CreateBaseComponent{
    constructor(){
        super()
        this.container = this.createBaseComponent('div', ['left-hints'])
        this.eventEmitter = new EventEmitter();
        this.eventEmitter.on('mouseOverRow', this.mouseOnRow);
        this.eventEmitter.on('mouseOutRow', this.mouseOutRow);
    }

    createHints(hints){
        this.rows = [];
        this.container.innerHTML = '';
        const arrayOfHints = hints.split('  ').map(element => element.split(' '))
        const maxLength = arrayOfHints.reduce((acc, elem) =>  elem.length > acc ? elem.length : acc ,0);
        arrayOfHints.forEach((element,index) => {
            let columnOfHints = this.createBaseComponent('div', ['row-hints'], this.container);
            this.rows.push(columnOfHints)
            if ((index + 1) % 5 === 0) {
                columnOfHints.classList.add('left-hint__border');
            }
            for (let i = element.length; i < maxLength; i++){
                this.createBaseComponent('div', ['left-hint'], columnOfHints);
            }
            element.forEach(item => {
                const cell = this.createBaseComponent('div', ['left-hint'], columnOfHints, item);
                cell.addEventListener('click', () => { cell.classList.toggle('cross')})
            })
        }); 
    }

    mouseOnRow = (index) =>{
            this.rows[index].classList.add('mouse-over');
    }
    mouseOutRow = (index) =>{
             this.rows[index].classList.remove('mouse-over');
     }
}