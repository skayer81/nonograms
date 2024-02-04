import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ViewField extends CreateBaseComponent{
    constructor(callback){
        super();
        this.callback = callback;
        this.container = this.createBaseComponent('div', ['field'])
        this.matrix = [];
    }

    createField (fieldHeigth, fieldWidth){
        this.container.innerHTML = '';
        this.matrix = [];
        for(let i = 0; i < fieldHeigth; i++){
            let widthContainer = this.createBaseComponent('div', ['field__row'], this.container);
            this.matrix.push([])
            for(let j = 0; j < fieldWidth; j++){
                const cell = this.createBaseComponent('div', ['cell'], widthContainer);
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