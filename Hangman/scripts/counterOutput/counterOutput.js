import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class CounterOutput extends CreateBaseComponent{
    constructor(){
        super()
        this.init()
    }

    init(){
        this.container = this.createBaseComponent(document.body, 'div', ['counters-container']);
        this.createBaseComponent(this.container , 'div', [], 'Ваши жизни');
        this.curentCount = this.createBaseComponent(this.container , 'span', ['counter-curent', 'counter']);
        this.createBaseComponent(this.container , 'span', ['delimiter'], '/');
        this.totalCount = this.createBaseComponent(this.container , 'span', ['counter-total', 'counter']);
        // this.totalCount.innerText = 'totalCount';
        // this.curentCount.innerText = '1';

    }

    counterOutput(counter){
        this.curentCount.innerText = counter
    }

    startNewGame(totalCount){
        this.totalCount.innerText =  totalCount;//String(totalCount);
        this.curentCount.innerText = totalCount;
    }


}