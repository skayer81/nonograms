import { CreateBaseComponent } from './createComponent/createComponent.js';
import { ViewField } from './viewField/viewField.js';
import { ViewLeftHints } from './viewLeftHints/viewLeftHints.js';
import { ViewTopHints } from './viewTopHints/viewTopHints.js';
import { ViewButtons } from './viewButtonsBlock/viewButtonsBlock.js';
import { Timer } from './timer/timer.js';
import { Nonograms } from './nonograms/nonograms.js';
import { LevelSelector } from './selectLevel/selectLevel.js';
import { ModalWindows } from './modalWindows/modalWindows.js';
import { Records } from './records/records.js';
import { Sounds } from './sounds/sounds.js';
import { ThemeChanger } from './themeChanger/themeChanger.js';

export class Application extends CreateBaseComponent {
  constructor() {
    super();

    this.nonograms = new Nonograms();
    this.viewField = new ViewField(this.onCellPress, this.getGameStatus);
    this.viewLeftHints = new ViewLeftHints();
    this.viewTopHints = new ViewTopHints();
    this.levelSelector = new LevelSelector(
      this.nonograms.getList(),
      this.selectLevel,
    );
    this.buttonBlock = new ViewButtons(
      this.showSolution,
      this.getData,
      this.setData,
      this.restartGame,
      this.randomGame,
      this.showRecords,
    );
    this.modalWindow = new ModalWindows();
    this.records = new Records();
    this.timer = new Timer();
    this.sounds = new Sounds();
    this.themeChanger = new ThemeChanger();

    this.isGameStart = false;
    this.isGameEnd = false;
    this.isLBtnDown = false;
    this.cellState = 0;

    this._viewBuilder();
    this.startNonogramInit();
  }

  startNonogramInit = () => {
    const test = this.nonograms.getRandomEasy();
    this.currentNonogram = test;
    this.newNonogram();
  };

  selectLevel = id => {
    this.currentNonogram = this.nonograms.getNonogramsById(id);
    this.newNonogram();
  };

  newNonogram() {
    this.viewField.createField(
      this.currentNonogram.heigth,
      this.currentNonogram.width,
    );
    this.viewLeftHints.createHints(this.currentNonogram.left);
    this.viewTopHints.createHints(this.currentNonogram.top);

    this.trueCellCount = this.currentNonogram.solution
      .split('')
      .reduce((acc, item) => (item == 1 ? acc + 1 : acc), 0);
    this.falseCellCount = 0;
    this.currentNonogramMatrix = this.currentNonogram.solution.split(' ').map(
      item =>
        (item = item.split('').map(
          item2 =>
            (item2 = {
              isTrue: Boolean(Number(item2)),
              hasCross: false,
              hasShaded: false,
            }),
        )),
    );
    this.isGameEnd = false;
    this.isGameStart = false;
    this.timer.setTime();
    this.buttonBlock.disableSaveGame(false);
    this.buttonBlock.disableShowsolutionBtn(false);
    this.nonogramTitle.innerText = this.currentNonogram.name;
  }

  playSound(cell, left) {
    if (left && !cell.hasShaded) {
      this.sounds.play('lclick');
      return;
    }
    if (!left && !cell.hasCross) {
      this.sounds.play('rclick');
      return;
    }
    this.sounds.play('clear');
  }

  onCellPress = (i, j, left) => {
    if (this.isGameEnd) {
      return;
    }
    if (!this.isGameStart) {
      this.isGameStart = true;
      this.timer.start();
    }

    let curentCell = this.currentNonogramMatrix[i][j];
    this.playSound(curentCell, left);

    if (!left) {
      if (curentCell.isTrue && curentCell.hasShaded) {
        this.trueCellCount += 1;
      }
      if (!curentCell.isTrue && curentCell.hasShaded) {
        this.falseCellCount -= 1;
      }

      curentCell.hasCross = !curentCell.hasCross;
      curentCell.hasShaded = false;
    } else {
      curentCell.hasCross = false;
      curentCell.hasShaded = !curentCell.hasShaded;
      if (curentCell.isTrue) {
        if (curentCell.hasShaded) {
          this.trueCellCount -= 1;
        } else {
          this.trueCellCount += 1;
        }
      } else {
        if (curentCell.hasShaded) {
          this.falseCellCount += 1;
        } else {
          this.falseCellCount -= 1;
        }
      }
    }
    if (this.trueCellCount === 0 && this.falseCellCount === 0) {
      this.showSolution();
      this.timer.stop();
      this.modalWindow.showWinWindow(
        this.currentNonogram.name,
        this.timer.getTime(),
      );
      this.records.addRecord(
        this.currentNonogram.name,
        this.currentNonogram.width,
        this.timer.getTime(),
      );
      this.sounds.play('win');
      this.isGameEnd = true;
    }
  };

  showSolution = () => {
    for (let i = 0; i < this.currentNonogramMatrix.length; i++) {
      for (let j = 0; j < this.currentNonogramMatrix[i].length; j++) {
        this.viewField.showSolution(
          i,
          j,
          this.currentNonogramMatrix[i][j].isTrue,
        );
      }
    }
    this.isGameEnd = true;
    this.timer.stop();
    this.buttonBlock.disableSaveGame(true);
    this.buttonBlock.disableShowsolutionBtn(true);
  };

  getData = () => {
    return {
      matrix: this.currentNonogramMatrix,
      nonorgam: this.currentNonogram,
      falseCellCount: this.falseCellCount,
      trueCellCount: this.trueCellCount,
      time: this.timer.getTime(),
    };
  };

  setData = data => {
    this.currentNonogram = data.nonorgam;
    this.newNonogram();
    this.currentNonogramMatrix = data.matrix;
    this.falseCellCount = data.falseCellCount;
    this.trueCellCount = data.trueCellCount;
    this.timer.setTime(data.time);
    this.timer.start();
    this.isGameStart = true;
    this.showLoadMatrix();
  };

  showLoadMatrix() {
    for (let i = 0; i < this.currentNonogramMatrix.length; i++) {
      for (let j = 0; j < this.currentNonogramMatrix[i].length; j++) {
        this.viewField.showLoadMatrix(
          i,
          j,
          this.currentNonogramMatrix[i][j].hasCross,
          this.currentNonogramMatrix[i][j].hasShaded,
        );
      }
    }
  }

  restartGame = () => {
    this.newNonogram();
  };

  randomGame = () => {
    this.currentNonogram = this.nonograms.getRandom();
    this.newNonogram();
  };

  showRecords = () => {
    this.modalWindow.showRecordsWindow(this.records.getRecords());
  };

  getGameStatus = () => {
    return this.isGameEnd;
  };

  _viewBuilder() {
    const container = this.createBaseComponent(
      'div',
      ['container'],
      document.body,
    );
    this.createBaseComponent('h1', ['title'], container, 'НОНОГРАММЫ');
    container.append(this.levelSelector.container);
    const settingsContainer = this.createBaseComponent(
      'div',
      ['settings-container'],
      container,
    );
    settingsContainer.append(
      this.themeChanger.container,
      this.timer.container,
      this.sounds.container,
    );
    const appFieldContainer = this.createBaseComponent('div', [
      'field-container',
    ]);
    const topField = this.createBaseComponent(
      'div',
      ['field__top'],
      appFieldContainer,
    );
    const bottomField = this.createBaseComponent(
      'div',
      ['field__bottom'],
      appFieldContainer,
    );
    topField.append(this.viewTopHints.container);
    bottomField.append(this.viewLeftHints.container, this.viewField.container);
    const fieldAndNameContainer = this.createBaseComponent(
      'div',
      ['outer-container'],
      document.body,
    );
    const leftSide = this.createBaseComponent(
      'div',
      ['left-side'],
      fieldAndNameContainer,
    );
    this.nonogramTitle = this.createBaseComponent('h2', ['title']);
    leftSide.append(this.nonogramTitle, appFieldContainer);
    const mainContainer = this.createBaseComponent(
      'div',
      ['main-container'],
      container,
    );
    mainContainer.append(leftSide, this.buttonBlock.container);
  }
}
