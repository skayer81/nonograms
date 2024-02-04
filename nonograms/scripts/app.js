import { CreateBaseComponent } from "./createComponent/createComponent.js";
import { ViewField } from "./viewField/viewField.js";
import { ViewLeftHints } from "./viewLeftHints/viewLeftHints.js";
import { ViewTopHints } from "./viewTopHints/viewTopHints.js";
import { ViewButtons } from "./viewButtonsBlock/viewButtonsBlock.js";
import { Timer } from "./timer/timer.js";

export class Application extends CreateBaseComponent{

  // test1 = [[01100], [11001], [11110], [01100], [10010]]
    width = 5;
    heigth = 5;
    test1 = '01100 11001 11110 01100 10010'
    top = '2 1  4  1 2  1 1  1'
    left = '2  2 1  4  2  1 1'


    constructor(){
        super();
        this.viewField = new ViewField(this.onCellPress);
        this.viewLeftHints = new ViewLeftHints();
        this.viewTopHints = new ViewTopHints();
        this.buttonBlock = new ViewButtons(this.showSolution);
        this.timer = new Timer();
        
        this.viewField.createField(5,5);
        this.viewLeftHints.createHints(this.left);
        this.viewTopHints.createHints(this.top);
        this._viewBuilder();
        console.log('start');
        this.newNonogram();
    }
    

    newNonogram(){
        this.trueCellCount = this.test1.split('').reduce((acc, item) => item == 1 ? acc+1 : acc ,0);
        this.falseCellCount = 0;
        this.nonogram = this.test1.split(' ').map(item =>  item = item.split('').map(item2 => item2 = {isTrue: Boolean(Number(item2)), hasCross: false, hasShaded : false}))// map(element => element))
       // console.log('matrix', this.nonogram);

    }

    onCellPress = (i, j, left) => {
        console.log('nonogram', i, j, left);
        console.log(this.trueCellCount, this.falseCellCount)
        if (!left){
            this.nonogram[i][j].hasCross = !this.nonogram[i][j].hasCross; 
            this.timer.start();
            return;
        }
        this.timer.stop();
        this.nonogram[i][j].hasShaded = !this.nonogram[i][j].hasShaded;
        if (this.nonogram[i][j].isTrue) {
            if (this.nonogram[i][j].hasShaded) this.trueCellCount -= 1;
            else this.trueCellCount += 1;
        }
        else{
            if (this.nonogram[i][j].hasShaded) this.falseCellCount += 1;
            else this.falseCellCount -= 1;
        }
        console.log(this.trueCellCount, this.falseCellCount)
        if (this.trueCellCount === 0 && this.falseCellCount === 0) alert('победа');

       // this.nonogram()
    }

    showSolution = () => {
        for (let i = 0; i < this.nonogram.length; i++){
            for (let j = 0; j < this.nonogram[i].length; j ++){
                this.viewField.showSolution(i, j, this.nonogram[i][j].isTrue);
            }
        }
    }

    _viewBuilder(){
        const appFieldContainer = this.createBaseComponent('div', ['field-container'], document.body)
        const topField = this.createBaseComponent('div', ['field__top'], appFieldContainer);
        const bottomField = this.createBaseComponent('div', ['field__bottom'], appFieldContainer);
        topField.append(this.viewTopHints.container);
        bottomField.append(this.viewLeftHints.container, this.viewField.container)
    }
}


