import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class QuestOutput extends CreateBaseComponent{
    constructor(){
        super()
        this.init()
    }

    init(){
        this.container = this.createBaseComponent(0, 'div', ['quest-output']);
        this.curentQuest = this.createBaseComponent(this.container , 'span');
    }

    startNewGame(quest){
        this.curentQuest.innerText = `вопрос: ${quest}`;
    }


}