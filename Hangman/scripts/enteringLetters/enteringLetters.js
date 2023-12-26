import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class EnteringLetters extends CreateBaseComponent{
    ALPHABET = 'АБВГДЕЗЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    constructor(){
        super();
        
        this.buttonList = [];
        this.container = this.createBaseComponent(document.body, 'div', ['buttonsContainer']);
       // this.init();
    }

    init(observer){
       // console.log(observer)
        //console.log(this.ALPHABET.length)
       // this.o = observer;
        for(let i = 0; i < this.ALPHABET.length; i += 1){
            let button = this.createBaseComponent(this.container, 'button', ['charContainer'], this.ALPHABET[i])
            this.buttonList.push(button);
            button.addEventListener('click', () => {
                observer(this.ALPHABET[i]);
            })
        }
    }
    

    /**
     * 
     * @param {string} char - буква
     * @param {number} positions - позиция
     */
    // outputChar(char, positions){

    // }

    // win(){
        
    // }

    // lose(){
        
    // }

}