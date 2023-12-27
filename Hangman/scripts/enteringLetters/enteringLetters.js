import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class EnteringLetters extends CreateBaseComponent{
    ALPHABET = 'АБВГДЕЗЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    constructor(onKeyPress){
        super();
        
        this.buttonList = [];
        this.container = this.createBaseComponent(document.body, 'div', ['buttonsContainer']);
        this.init(onKeyPress);
    }

    init(onKeyPress){
       // console.log(lettersPush)
        //console.log(this.ALPHABET.length)
       // this.o = lettersPush;
        for(let i = 0; i < this.ALPHABET.length; i += 1){
            let button = this.createBaseComponent(this.container, 'button', ['button'], this.ALPHABET[i])
            this.buttonList.push(button);
            button.addEventListener('click', () => {
                onKeyPress(this.ALPHABET[i], button);
            })
        }
    }

    isLetterTrue(button){
        button.classList.add('isLetterTrue');
        let span1 = this.createBaseComponent(button, 'span', ['span1']);
        span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
        let span2 = this.createBaseComponent(button, 'span', ['span2']);
        let spanInside = this.createBaseComponent(span2, 'span', ['spanInside']);
        spanInside.style.animation = 'letterIsOkSpan 0.5s normal linear forwards 0.5s'
       // span.onanimationend = this.newSpan(button);
        button.setAttribute('tabindex', -1)
    }

    isLetterFalse(button){
        button.classList.add('isLetterFalse');
        let span1 = this.createBaseComponent(button, 'span', ['span1']);
        span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
        let span2 = this.createBaseComponent(button, 'span', ['span2']);
     //   let spanInside = this.createBaseComponent(span2, 'span', ['spanInside']);
     span2.style.animation = 'letterIsOkSpan 0.5s normal linear forwards 0.5s'
       // span.onanimationend = this.newSpan(button);
        button.setAttribute('tabindex', -1)

    }

    newSpan(button){
        alert('второй спан')
        let span = this.createBaseComponent(button, 'span', ['span2']);
       // span.onanimationend = this.newSpan();
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