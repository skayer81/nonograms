import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class WordOutput extends CreateBaseComponent{
    constructor(){
        super();

        this.init();
        this.charContainers = [];
    }

    init(){
        this.container = this.createBaseComponent(document.body, 'div', ['wordContainer']);
    }

    startGame(lengthOfWord){
        for(let i = 0; i < lengthOfWord; i += 1){
            this.charContainers.push(this.createBaseComponent(this.container, 'div', ['charContainer']));
        }
    }

    /**
     * 
     * @param {string} char - буква
     * @param {number} positions - позиция
     */
    outputChar(char, positions){
        this.charContainers[positions].innerHTML = char
    }

    win(){
        
    }

    lose(){
        
    }

}