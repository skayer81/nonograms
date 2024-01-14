import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class CounterOutput extends CreateBaseComponent{
    constructor(){
        super()
        this.init()
    }

    init(){
        this.container = this.createBaseComponent(document.body, 'div');
        this.createBaseComponent(this.container , 'div', [], 'Ваши жизни');
        this.curentCount = this.createBaseComponent(this.container , 'span');
        this.createBaseComponent(this.container , 'span', [], '/');
        this.totalCount = this.createBaseComponent(this.container , 'span');
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