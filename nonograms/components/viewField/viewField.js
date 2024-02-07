import { CreateBaseComponent } from "../createComponent/createComponent.js";
import { EventEmitter } from "./eventEmmiter.js";

export class ViewField extends CreateBaseComponent{
    constructor(callback, isGameEnd, mouseOverCallback, mouseOutCallback){
        super();
        this.callback = callback;
        this.isGameEnd = isGameEnd;
        this.container = this.createBaseComponent('div', ['field'])
        this.matrix = [];
        this.eventEmitter = new EventEmitter()
    }



    createField (fieldHeigth, fieldWidth){
        this.container.innerHTML = '';
        this.matrix = [];
        for(let i = 0; i < fieldHeigth; i++){
            let widthContainer = this.createBaseComponent('div', ['field__row'], this.container);
            if (i % 5 === 0){
                widthContainer.classList.add('border__row')
            }
            this.matrix.push([])
            for(let j = 0; j < fieldWidth; j++){
                const cell = this.createBaseComponent('div', ['cell'], widthContainer);
                if ( j % 5 === 0){
                    cell.classList.add('border__column')
                }
                this.matrix[i].push(cell);
                 cell.addEventListener('click', () => {
                     this.cellClick(cell);
                     this.callback(i, j, true);
                 })   
                 cell.addEventListener('contextmenu', (event) => {
                     event.preventDefault();
                     this.cellRigthClick(cell);
                     this.callback(i, j, false);                     
                 })
                 cell.addEventListener('mouseover', () => {
                    this.eventEmitter.emit('mouseOverRow', [i]);
                    this.eventEmitter.emit('mouseOverColumn', [j]);
                 })
                 cell.addEventListener('mouseout', () => {
                    this.eventEmitter.emit('mouseOutRow', [i]);
                    this.eventEmitter.emit('mouseOutColumn', [j]);
                 } )
            }
        }        
    }

    showSolution(i, j, isTrue){
      //  console.log('матрица', this.matrix)
        const cell = this.matrix[i][j];
      //  console.log(cell)
        cell.classList.remove('cross');
        if (isTrue){
            cell.classList.add('shaded');
        }
        else{
            cell.classList.remove('shaded');
        }
       // if(isTrue){}
    }


    showLoadMatrix(i, j, hasCross, hasShaded){
        if (hasCross){
            this.matrix[i][j].classList.add('cross')
        }
        if (hasShaded){
            this.matrix[i][j].classList.add('shaded')
        }
    }


    cellClick = (cell) =>{
        if (this.isGameEnd()){
            return
        }
        cell.classList.remove('cross');
        cell.classList.toggle('shaded');
      //  document.body.classList.toggle('darkTheme')
    }

    cellRigthClick = (cell) => {
        if (this.isGameEnd()){
            return
        }
        cell.classList.remove('shaded');
        cell.classList.toggle('cross')
    }

    // createContainer(){
    //     return this.createBaseComponent('section', ['field'])
    // }
}