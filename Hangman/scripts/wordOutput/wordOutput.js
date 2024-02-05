import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class WordOutput extends CreateBaseComponent{
    constructor(){
        super();
        this.init();
        this._positions = [];
        this.charContainers = [];
    }

    init(){
        this.container = this.createBaseComponent(0, 'div', ['wordContainer']);
    }

    startNewGame(lengthOfWord){
        this.charContainers = [];
        this.container.innerHTML = '';
        for(let i = 0; i < lengthOfWord; i += 1){
            this.charContainers.push(this.createBaseComponent(this.container, 'div', ['charContainer'], '?'));
        }
    }

    /**
     * 
     * @param {string} char - буква
     * @param {number} positions - позиция
     */
    outputChar(char, positions){
     //   this._char = char;
     //   this._positions.push(positions);
     const animationend = () => {
        console.log(this);
        this.outputCharStep2(char, positions)}
        this.charContainers[positions].style.animation = 'openCharStep1 0.5s normal linear forwards';
        this.charContainers[positions].onanimationend = animationend;
        // const animationend = () => {
        //     console.log(this);
        //     this.outputCharStep2(char, positions)}
    }

    outputCharStep2 = (char, positions) => {
      //  this._positions.forEach(pos => {
            this.charContainers[positions].onanimationend = null;
            this.charContainers[positions].classList.add('charIsOpen')
            this.charContainers[positions].innerHTML = char;
            this.charContainers[positions].style.animation = 'openCharStep2 0.5s normal linear forwards';

      //  })
      //  this._positions = [];
    }
}