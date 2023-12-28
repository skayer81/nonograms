import { EnteringLetters } from "../enteringLetters/enteringLetters.js";
import { ImageOutput } from "../imageOutput/imageOutput.js";
import { WordOutput } from "../wordOutput/wordOutput.js";

export class ApplicationManagement{
    constructor(){
        //добавить создание общего контейнера
        this.imageOutput = new ImageOutput();
        this.wordOutput = new WordOutput();
        this.enteringLetters = new EnteringLetters(this.onKeyPress);
      
       

        this.testWord = 'ГОЛОЛЕД';
        //добавить загрузку из json вопросов и ответов
        this.countOfLife = 6;
        this.countOutputsChar = 0;
        this.init();
        this.startGame();
    }

    buttonIsPush = (letter) => {
        console.log(this, letter)
    }

    init(){
       // this.wordOutput.init();
  //      this.enteringLetters.init(this.lettersPush);
    }

    startGame(){
        this.wordOutput.startGame(this.testWord.length);
       // this.wordOutput.outputChar('D', 4)
    }

    onKeyPress  = (letter, button) => {
        let isLetterNotFind = true;
        for (let i = 0; i <= this.testWord.length; i += 1){
            let char = this.testWord[i];
            if (char === letter) {
                this.wordOutput.outputChar(char, i);
                isLetterNotFind = false;
                this.countOutputsChar += 1;
                this.enteringLetters.isLetterTrue(button);
            }
        }

        if (isLetterNotFind) {
            this.imageOutput.outputPartOfImage(6 - this.countOfLife);
            this.enteringLetters.isLetterFalse(button);
            this.countOfLife -= 1;
        };
        if ( this.countOutputsChar === this.testWord.length) alert('вы выиграли')
        if (!this.countOfLife) alert('вы проиграли')

        
       // this.wordOutput.outputChar();
        

    }

}