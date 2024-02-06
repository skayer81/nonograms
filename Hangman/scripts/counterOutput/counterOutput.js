import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class CounterOutput extends CreateBaseComponent{
    constructor(){
        super()
        this.init()
    }

    init(){
        this.container = this.createBaseComponent(0, 'div', ['counters-container']);
        this.createBaseComponent(this.container , 'div', [], 'Ошибки:');
        this.curentCount = this.createBaseComponent(this.container , 'span', ['counter-curent', 'counter']);
        this.createBaseComponent(this.container , 'span', ['delimiter'], '/');
        this.totalCount = this.createBaseComponent(this.container , 'span', ['counter-total', 'counter']);
    }

    counterOutput(counter){
        this._counter = counter;
        this.curentCount.style.animation = 'openCharStep1 0.5s normal linear forwards';
        this.curentCount.onanimationend = this.counterOutputStep2;
    }


    outputChar(char, positions){
        this._char = char;
        this._positions.push(positions);
        this.charContainers[positions].style.animation = 'openCharStep1 0.5s normal linear forwards';
        this.charContainers[positions].onanimationend = this.outputCharStep2;
    }

    counterOutputStep2 = () => {
        this.curentCount.innerText = this._counter;
        this.curentCount.style.animation = 'openCharStep2 0.5s normal linear forwards';
    }

    startNewGame(totalCount){
        this.totalCount.innerText =  totalCount;
        this.curentCount.innerText = 0;
    }


}