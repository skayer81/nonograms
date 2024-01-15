import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class EnteringLetters extends CreateBaseComponent{
    constructor(onKeyPress, ALPHABET){
        super();
        this.ALPHABET = ALPHABET;
        this.buttonList = {};
        this._spanList = []
        this.container = this.createBaseComponent(0, 'div', ['buttonsContainer']);
        this.init(onKeyPress);
    }

    init(onKeyPress){
        for(let i = 0; i < this.ALPHABET.length; i += 1){
            let button = this.createBaseComponent(this.container, 'button', ['button'], this.ALPHABET[i])
            this.buttonList[this.ALPHABET[i]] = button;
            button.addEventListener('click', () => {
                this.curentPushedLetter = button
                onKeyPress(this.ALPHABET[i]);
            })
        }
    }

    _spanAnimations(button, flag){
        let span1 = this.createBaseComponent(button, 'span', ['span1']);
        span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
        let span2 = this.createBaseComponent(button, 'span', ['span2']);
        if (flag){
            let spanInside = this.createBaseComponent(span2, 'span', ['spanInside']);
            spanInside.style.animation = 'letterIsOkSpan 0.5s normal linear forwards 0.5s'
        }
        else span2.style.animation = 'letterIsOkSpan 0.5s normal linear forwards 0.5s'

        button.setAttribute('tabindex', -1)

        this._spanList.push(span1);
        this._spanList.push(span2)
    }

    isLetterTrue(button){
        button.classList.add('isLetterTrue');
        this._spanAnimations(button, true);
    }

    isLetterFalse(button){
        button.classList.add('isLetterFalse');
        this._spanAnimations(button, false);
    }

    changePushLetter(isLetterNotFind, letter){
        if (isLetterNotFind) this.isLetterFalse(this.buttonList[letter])
        else this.isLetterTrue(this.buttonList[letter])
    }

    startNewGame(){
        for (let i = 0; i < this._spanList.length; i++){
            this._spanList[i].remove();
        }
        for (let button in this.buttonList){
            this.buttonList[button].classList.remove('isLetterFalse');
            this.buttonList[button].classList.remove('isLetterTrue');
            this.buttonList[button].removeAttribute('tabindex');
        }
    }
}