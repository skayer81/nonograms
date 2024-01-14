import { CreateBaseComponent } from "../createComponent/createComponent.js";


export class EnteringLetters extends CreateBaseComponent{
    //ALPHABET = 'АБВГДЕЗЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    constructor(onKeyPress, ALPHABET){
        super();
        this.ALPHABET = ALPHABET;
        this.buttonList = {};
        this._spanList = []
        this.container = this.createBaseComponent(document.body, 'div', ['buttonsContainer']);
        this.init(onKeyPress);
    }

    init(onKeyPress){
        for(let i = 0; i < this.ALPHABET.length; i += 1){
            let button = this.createBaseComponent(this.container, 'button', ['button'], this.ALPHABET[i])
            this.buttonList[this.ALPHABET[i]] = button// .push(button);
            button.addEventListener('click', () => {
                this.curentPushedLetter = button
                onKeyPress(this.ALPHABET[i]);
            })

            // button.addEventListener('click', () => {
            //  //   alert('был клик')
            // })

            // button.addEventListener('click', () => {
            //   //  alert('был клик')
            // })




        }
    }

    _spanAnimations(button, flag){
        let span1 = this.createBaseComponent(button, 'span', ['span1']);
        span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
        let span2 = this.createBaseComponent(button, 'span', ['span2']);
     //   let spanInside = this.createBaseComponent(span2, 'span', ['spanInside']);
     
       // span.onanimationend = this.newSpan(button);
    //    button.setAttribute('tabindex', -1)

//
  //      let span1 = this.createBaseComponent(button, 'span', ['span1']);
    //    span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
    //    let span2 = this.createBaseComponent(button, 'span', ['span2']);

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
        // let span1 = this.createBaseComponent(button, 'span', ['span1']);
        // span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
        // let span2 = this.createBaseComponent(button, 'span', ['span2']);
        // let spanInside = this.createBaseComponent(span2, 'span', ['spanInside']);
        // spanInside.style.animation = 'letterIsOkSpan 0.5s normal linear forwards 0.5s'
        // button.setAttribute('tabindex', -1)
    }

    isLetterFalse(button){
        button.classList.add('isLetterFalse');
        this._spanAnimations(button, false);
    //     let span1 = this.createBaseComponent(button, 'span', ['span1']);
    //     span1.style.animation = 'letterIsOkSpan 0.5s normal linear forwards'
    //     let span2 = this.createBaseComponent(button, 'span', ['span2']);
    //  //   let spanInside = this.createBaseComponent(span2, 'span', ['spanInside']);
    //  span2.style.animation = 'letterIsOkSpan 0.5s normal linear forwards 0.5s'
    //    // span.onanimationend = this.newSpan(button);
    //     button.setAttribute('tabindex', -1)

    }

    newSpan(button){
     //   alert('второй спан')
        let span = this.createBaseComponent(button, 'span', ['span2']);
       // span.onanimationend = this.newSpan();
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
            console.log(button)
            this.buttonList[button].classList.remove('isLetterFalse');
            this.buttonList[button].classList.remove('isLetterTrue')
        }
    //     console.log(this.buttonList)
    //     for (let buttonChar in this.buttonList){
    //    //     this.buttonList[buttonChar]
    //        this.buttonList[buttonChar].firstChild.remove();
    //     }
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

//(111)