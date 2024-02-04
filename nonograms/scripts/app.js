import { CreateBaseComponent } from "./createComponent/createComponent.js";
import { ViewField } from "./viewField/viewField.js";
import { ViewLeftHints } from "./viewLeftHints/viewLeftHints.js";
import { ViewTopHints } from "./viewTopHints/viewTopHints.js";
import { ViewButtons } from "./viewButtonsBlock/viewButtonsBlock.js";
import { Timer } from "./timer/timer.js";
import { Nonograms } from "./nonograms/nonograms.js";

export class Application extends CreateBaseComponent{

  // test1 = [[01100], [11001], [11110], [01100], [10010]]
    width = 5;
    heigth = 5;
    test1 = '01100 11001 11110 01100 10010'
    top = '2 1  4  1 2  1 1  1'
    left = '2  2 1  4  2  1 1'


    constructor(){
        super();
        this.nonograms = new Nonograms();
        this.viewField = new ViewField(this.onCellPress);
        this.viewLeftHints = new ViewLeftHints();
        this.viewTopHints = new ViewTopHints();
        this.buttonBlock = new ViewButtons(this.showSolution, this.getData, this.setData, this.restartGame);
        this.timer = new Timer();
        
        this._viewBuilder();
        console.log('start');
        this.newNonogramInit();
    }
    
    newNonogramInit(){
        this.currentNonogram = this.nonograms.getRandomEasy();
        this.newNonogram();
    }

    newNonogram(){
       // this.currentNonogram = this.nonograms.getRandomEasy();
        this.viewField.createField(this.currentNonogram.heigth, this.currentNonogram.width);
        this.viewLeftHints.createHints(this.currentNonogram.left);
        this.viewTopHints.createHints(this.currentNonogram.top);

        this.trueCellCount = this.currentNonogram.solution.split('').reduce((acc, item) => item == 1 ? acc+1 : acc ,0);
        this.falseCellCount = 0;
        this.currentNonogramMatrix = this.currentNonogram.solution.split(' ').map(item =>  item = item.split('').map(item2 => item2 = {isTrue: Boolean(Number(item2)), hasCross: false, hasShaded : false}))// map(element => element))
       // console.log('matrix', this.nonogram);

    }

    onCellPress = (i, j, left) => {
  //      console.log('nonogram', i, j, left);
        console.log('до', this.trueCellCount, this.falseCellCount);
        this.timer.start();
        if (!left){
            if (this.currentNonogramMatrix[i][j].isTrue && this.currentNonogramMatrix[i][j].hasShaded) {this.trueCellCount += 1}
            if (!this.currentNonogramMatrix[i][j].isTrue && this.currentNonogramMatrix[i][j].hasShaded) {this.falseCellCount -= 1}

            this.currentNonogramMatrix[i][j].hasCross = !this.currentNonogramMatrix[i][j].hasCross; 
            this.currentNonogramMatrix[i][j].hasShaded = false;
            //  this.timer.start();
            return;
        }
        
      //  this.timer.stop();
        this.currentNonogramMatrix[i][j].hasCross = false
        this.currentNonogramMatrix[i][j].hasShaded = !this.currentNonogramMatrix[i][j].hasShaded;
        if (this.currentNonogramMatrix[i][j].isTrue) {
            if (this.currentNonogramMatrix[i][j].hasShaded) {this.trueCellCount -= 1} 
            else {this.trueCellCount += 1};
        }
        else{
            if (this.currentNonogramMatrix[i][j].hasShaded) {this.falseCellCount += 1}
            else {this.falseCellCount -= 1};
        }
     //   console.log(this.trueCellCount, this.falseCellCount)
        if (this.trueCellCount === 0 && this.falseCellCount === 0) {
            
            this.timer.stop();
            setTimeout(() => {
                alert(`победа за ${this.timer.getTime()} сек`);
            }, 0)
            
        }
        console.log('после', this.trueCellCount, this.falseCellCount)
       // this.nonogram()
    }

    showSolution = () => {
        for (let i = 0; i < this.currentNonogramMatrix.length; i++){
            for (let j = 0; j < this.currentNonogramMatrix[i].length; j ++){
                this.viewField.showSolution(i, j, this.currentNonogramMatrix[i][j].isTrue);
            }
        }
    }

    getData = () => {
        return {
            matrix: this.currentNonogramMatrix,
            nonorgam: this.currentNonogram,
            // with: this.currentNonogram.width,
            // heigth: this.currentNonogram.heigth,
            falseCellCount: this.falseCellCount,
            trueCellCount: this.trueCellCount,
            time: this.timer.getTime()
        }
    }

    setData = (data) => {
        this.currentNonogram = data.nonorgam;
        this.newNonogram();
        this.currentNonogramMatrix = data.matrix;
        this.falseCellCount = data.falseCellCount;
        this.trueCellCount = data.trueCellCount;
        this.timer.start();
        this.timer.reStartTime(data.time);
        this.showLoadMatrix();
    }

    showLoadMatrix(){
        for (let i = 0; i < this.currentNonogramMatrix.length; i++){
            for (let j = 0; j < this.currentNonogramMatrix[i].length; j ++){
                this.viewField.showLoadMatrix(i, j, this.currentNonogramMatrix[i][j].hasCross, this.currentNonogramMatrix[i][j].hasShaded);
            }
        }
    }

    restartGame = () => {
        this.newNonogram()
    }

    // clearMatrix(){
    //     for (let i = 0; i < this.currentNonogramMatrix.length; i++){
    //         for (let j = 0; j < this.currentNonogramMatrix[i].length; j ++){
    //             this.viewField.clearMatrix(i, j)//, this.currentNonogramMatrix[i][j].hasCross, this.currentNonogramMatrix[i][j].hasShaded);
    //         }
    //     }
    // }

    _viewBuilder(){
        const appFieldContainer = this.createBaseComponent('div', ['field-container'], document.body)
        const topField = this.createBaseComponent('div', ['field__top'], appFieldContainer);
        const bottomField = this.createBaseComponent('div', ['field__bottom'], appFieldContainer);
        topField.append(this.viewTopHints.container);
        bottomField.append(this.viewLeftHints.container, this.viewField.container)
    }
}


