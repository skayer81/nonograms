import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class QuestOutput extends CreateBaseComponent{
    constructor(){
        super()
        this.init()
    }

    init(){
        this.container = this.createBaseComponent(document.body, 'div');
       // this.createBaseComponent(this.container , 'div', [], 'Ваши жизни');
        this.curentQuest = this.createBaseComponent(this.container , 'span');
        // this.createBaseComponent(this.container , 'span', [], '/');
        // this.totalCount = this.createBaseComponent(this.container , 'span');
        // this.totalCount.innerText = 'totalCount';
        // this.curentCount.innerText = '1';

    }

    // counterOutput(counter){
    //     this.curentCount.innerText = counter
    // }

    startNewGame(quest){
        //this.totalCount.innerText =  totalCount;//String(totalCount);
        this.curentQuest.innerText = `вопрос: ${quest}`;
    }


}