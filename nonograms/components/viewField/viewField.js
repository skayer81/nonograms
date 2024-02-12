import { CreateBaseComponent } from '../createComponent/createComponent.js';
import { EventEmitter } from './eventEmmiter.js';

export class ViewField extends CreateBaseComponent {
  constructor(callback, isGameEnd) {
    super();
    this.callback = callback;
    this.isGameEnd = isGameEnd;
    this.container = this.createBaseComponent('div', ['field']);
    this.matrix = [];
    this.eventEmitter = new EventEmitter();
    this.container.addEventListener('pointerleave', () => {
      this.isLBtnDown = false;
      this.isRBtnDown = false;
    });
  }

  createField(fieldHeigth, fieldWidth) {
    this.container.innerHTML = '';
    this.matrix = [];
    for (let i = 0; i < fieldHeigth; i++) {
      let widthContainer = this.createBaseComponent(
        'div',
        ['field__row'],
        this.container,
      );
      if (i % 5 === 0) {
        widthContainer.classList.add('border__row');
      }
      this.matrix.push([]);
      for (let j = 0; j < fieldWidth; j++) {
        const cell = this.createBaseComponent('div', ['cell'], widthContainer);
        if (j % 5 === 0) {
          cell.classList.add('border__column');
        }
        this.matrix[i].push(cell);
        cell.addEventListener('dragstart', event => {
          event.preventDefault();
        });

        cell.addEventListener('pointerdown', event => {
          if (event.button === 0) {
            this.cellClick(cell);
            this.callback(i, j, true, this.isLBtnDown);
            this.isLBtnDown = true;
          }
          if (event.button === 2) {
            this.cellRigthClick(cell);
            this.callback(i, j, false, this.isLBtnDown);
            this.isRBtnDown = true;
          }
        });

        cell.addEventListener('pointerup', event => {
          if (event.button === 0) {
            this.isLBtnDown = false;
          }
          if (event.button === 2) {
            this.isRBtnDown = false;
          }
        });
        cell.addEventListener('contextmenu', event => {
          event.preventDefault();
        });
        cell.addEventListener('pointerenter', () => {
          this.eventEmitter.emit(this.eventEmitter.events.mouseOverRow, [i]);
          this.eventEmitter.emit(this.eventEmitter.events.mouseOverColumn, [j]);
          if (this.isLBtnDown) {
            this.cellClick(cell);
            this.callback(i, j, true, this.isLBtnDown);
          }
          if (this.isRBtnDown) {
            this.cellRigthClick(cell);
            this.callback(i, j, false, this.isLBtnDown);
          }
        });
        cell.addEventListener('pointerleave', () => {
          this.eventEmitter.emit(this.eventEmitter.events.mouseOutRow, [i]);
          this.eventEmitter.emit(this.eventEmitter.events.mouseOutColumn, [j]);
        });
      }
    }
  }

  showSolution(i, j, isTrue) {
    const cell = this.matrix[i][j];
    cell.classList.remove('cross');
    if (isTrue) {
      cell.classList.add('shaded');
    } else {
      cell.classList.remove('shaded');
    }
  }

  showLoadMatrix(i, j, hasCross, hasShaded) {
    if (hasCross) {
      this.matrix[i][j].classList.add('cross');
    }
    if (hasShaded) {
      this.matrix[i][j].classList.add('shaded');
    }
  }

  cellClick = cell => {
    if (this.isGameEnd()) {
      return;
    }
    cell.classList.remove('cross');
    cell.classList.toggle('shaded');
  };

  cellRigthClick = cell => {
    if (this.isGameEnd()) {
      return;
    }
    cell.classList.remove('shaded');
    cell.classList.toggle('cross');
  };
  //   cellAddState(row, column, state) {
  //     const STATES = [null, 'cross', 'shaded'];
  //     const curentCell = this.matrix[(row, column)];
  //     curentCell.classList.remove('shaded');
  //     curentCell.classList.remove('cross');
  //     if (state) {
  //       curentCell.classList.add(STATES[state]);
  //     }
  //   }
}
