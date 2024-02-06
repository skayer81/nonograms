import { CreateBaseComponent } from "./createComponent/createComponent.js";
import { ViewField } from "./viewField/viewField.js";
import { ViewLeftHints } from "./viewLeftHints/viewLeftHints.js";
import { ViewTopHints } from "./viewTopHints/viewTopHints.js";
import { ViewButtons } from "./viewButtonsBlock/viewButtonsBlock.js";
import { Timer } from "./timer/timer.js";
import { Nonograms } from "./nonograms/nonograms.js";
import { SelectLevel } from "./selectLevel/selectLevel.js";
import { ModalWindows } from "./modalWindows/modalWindows.js";
import { Records } from "./records/records.js";

export class Application extends CreateBaseComponent{

  // test1 = [[01100], [11001], [11110], [01100], [10010]]
    // width = 5;
    // heigth = 5;
    // test1 = '01100 11001 11110 01100 10010'
    // top = '2 1  4  1 2  1 1  1'
    // left = '2  2 1  4  2  1 1'
    SOUNDS = {
        lclick: new Audio('./assets/sounds/lclick.mp3'),
        rclick: new Audio('./assets/sounds/rclick.mp3'),
        clear: new Audio('./assets/sounds/clear.mp3'),
        win: new Audio('./assets/sounds/win.mp3')
      }


    constructor(){
        super();
        this.nonograms = new Nonograms();
        this.viewField = new ViewField(this.onCellPress, this.getGameStatus);
        this.viewLeftHints = new ViewLeftHints();
        this.viewTopHints = new ViewTopHints();
        this.selectLevel = new SelectLevel(this.nonograms.getList(), this.selectLevel);
        this.buttonBlock = new ViewButtons(this.showSolution, this.getData, this.setData, this.restartGame, this.randomGame, this.showRecords);
        this.modalWindow = new ModalWindows();
        this.records = new Records()
        this.timer = new Timer();

        this.isGameStart = false;
        this.isGameEnd   = false;
        
        this._viewBuilder();
       // console.log('start');
        this.startNonogramInit();
    }
    
    startNonogramInit = () => {
        // if (id) {
        //     this.currentNonogram = this.nonograms.getNonogramsById(id)
        // }
        // else {
            this.currentNonogram = this.nonograms.getRandomEasy();
   //     }
   //     console.log(this.currentNonogram)
        this.newNonogram();
    }

    selectLevel = (id) => {
        this.currentNonogram = this.nonograms.getNonogramsById(id);
        this.newNonogram();
    }

    newNonogram(){
       // this.currentNonogram = this.nonograms.getRandomEasy();
     //  console.log(this.currentNonogram);
        this.viewField.createField(this.currentNonogram.heigth, this.currentNonogram.width);
        this.viewLeftHints.createHints(this.currentNonogram.left);
        this.viewTopHints.createHints(this.currentNonogram.top);

        this.trueCellCount = this.currentNonogram.solution.split('').reduce((acc, item) => item == 1 ? acc+1 : acc ,0);
        this.falseCellCount = 0;
        this.currentNonogramMatrix = this.currentNonogram.solution.split(' ').map(item =>  item = item.split('').map(item2 => item2 = {isTrue: Boolean(Number(item2)), hasCross: false, hasShaded : false}))// map(element => element))
       // console.log('matrix', this.nonogram);
        this.isGameEnd = false;
        this.isGameStart = false;
        this.timer.setTime();
    }

    playSound(cell, left){
       // this.SOUNDS.lclick.play()
        if (left && !cell.hasShaded){
          //  this.SOUNDS.lclick.volume = 100;
            this.SOUNDS.lclick.play()
            return
        }
        if (!left && !cell.hasCross){
            this.SOUNDS.rclick.play();
            return
        }
        this.SOUNDS.clear.play();

    }

    onCellPress = (i, j, left) => {
        if (this.isGameEnd) {
            return;
        }
        console.log(this.isGameEnd);

        if (!this.isGameStart){
            this.isGameStart = true;
            this.timer.start();
        }


  //      console.log('nonogram', i, j, left);
       let curentCell = this.currentNonogramMatrix[i][j];

      //  console.log('до', this.trueCellCount, this.falseCellCount, curentCell);
        
      //  let curentCell = this.currentNonogramMatrix[i][j];
        this.playSound(curentCell, left);

        if (!left){
            if (curentCell.isTrue && curentCell.hasShaded) {this.trueCellCount += 1}
            if (!curentCell.isTrue && curentCell.hasShaded) {this.falseCellCount -= 1}

            curentCell.hasCross = !curentCell.hasCross; 
            curentCell.hasShaded = false;
            //  this.timer.start();
            return;
        }
        
      //  this.timer.stop();
        curentCell.hasCross = false
        curentCell.hasShaded = !curentCell.hasShaded;
        if (curentCell.isTrue) {
            if (curentCell.hasShaded) {this.trueCellCount -= 1} 
            else {this.trueCellCount += 1};
        }
        else{
            if (curentCell.hasShaded) {this.falseCellCount += 1}
            else {this.falseCellCount -= 1};
        }
     //   console.log(this.trueCellCount, this.falseCellCount)
        if (this.trueCellCount === 0 && this.falseCellCount === 0) {
            
            this.timer.stop();
        //    setTimeout(() => {
                this.modalWindow.showWinWindow(this.currentNonogram.name, this.timer.getTime());
                this.records.addRecord(this.currentNonogram.name, this.currentNonogram.width, this.timer.getTime())

                this.SOUNDS.win.play();
                this.isGameEnd = true;

                //alert(`победа за ${this.timer.getTime()} сек`);
          //  }, 0)
            
        }
      //  console.log('после', this.trueCellCount, this.falseCellCount, curentCell)
       // this.nonogram()
    }

    showSolution = () => {
        for (let i = 0; i < this.currentNonogramMatrix.length; i++){
            for (let j = 0; j < this.currentNonogramMatrix[i].length; j ++){
                this.viewField.showSolution(i, j, this.currentNonogramMatrix[i][j].isTrue);
            }
        }
        this.isGameEnd = true;
        this.timer.stop();
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
      //  this.timer.  start();
        this.timer.setTime(data.time);
        this.timer.start();
        this.isGameStart = true;
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

    randomGame = () => {
        this.currentNonogram = this.nonograms.getRandom();
        this.newNonogram();
    }

    showRecords = () => {
        this.modalWindow.showRecordsWindow(this.records.getRecords())
    }
    // clearMatrix(){
    //     for (let i = 0; i < this.currentNonogramMatrix.length; i++){
    //         for (let j = 0; j < this.currentNonogramMatrix[i].length; j ++){
    //             this.viewField.clearMatrix(i, j)//, this.currentNonogramMatrix[i][j].hasCross, this.currentNonogramMatrix[i][j].hasShaded);
    //         }
    //     }
    // }

    getGameStatus =() =>{
        return this.isGameEnd;
    }

    _viewBuilder(){
        const appFieldContainer = this.createBaseComponent('div', ['field-container'], document.body)
        const topField = this.createBaseComponent('div', ['field__top'], appFieldContainer);
        const bottomField = this.createBaseComponent('div', ['field__bottom'], appFieldContainer);
        topField.append(this.viewTopHints.container);
        bottomField.append(this.viewLeftHints.container, this.viewField.container)
    }
}


