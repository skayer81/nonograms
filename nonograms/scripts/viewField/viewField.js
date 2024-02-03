import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ViewField extends CreateBaseComponent{
    constructor(fieldWidth, fieldHeigth, callback){
        super();
        this.callback = callback;
        this.fieldWidth = fieldWidth;
        this.fieldHeigth = fieldHeigth;
        this.container = this.createBaseComponent('div', ['field'])
    }

    createField (fieldHeigth, fieldWidth){
      //  alert(`поле ${fieldHeigth}-${fieldWidth}`)
        for(let i = 0; i < fieldHeigth; i++){
     //       alert(i)
            let widthContainer = this.createBaseComponent('div', ['field__row'], this.container)
            for(let j = 0; j < fieldWidth; j++){
                const cell = this.createBaseComponent('div', ['cell'], widthContainer)
                //cell.innerText = `${j}`
                 cell.addEventListener('click', () => {
                     this.cellClick(cell);
                     this.callback(i, j, true);
                //     this.callback(i, j);
                 })   
                 cell.addEventListener('contextmenu', (event) => {
                     event.preventDefault();
                     this.callback(i, j, false);
                     this.cellRigthClick(cell);
                 })
            }
        }
    }

    cellClick(cell){
        cell.classList.remove('cross');
        cell.classList.toggle('shaded');
    }

    cellRigthClick(cell){
        cell.classList.remove('shaded');
        cell.classList.toggle('cross')
    }

    // createContainer(){
    //     return this.createBaseComponent('section', ['field'])
    // }
}