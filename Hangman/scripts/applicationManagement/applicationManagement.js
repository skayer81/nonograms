import { EnteringLetters } from "../enteringLetters/enteringLetters.js";
import { ImageOutput } from "../imageOutput/imageOutput.js";
import { WordOutput } from "../wordOutput/wordOutput.js";
import { KeyboardHandler } from "../keyboardHandler/keyboardHandler.js";
import { ModalWindow } from "../modalWindow/modalWindow.js";
import { QuestAnswer } from "../questAnswerModul/questAnswerModul.js";

export class ApplicationManagement{

    ALPHABET = 'АБВГДЕЗЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    constructor(){
        //добавить создание общего контейнера
        this.imageOutput = new ImageOutput();
        this.wordOutput = new WordOutput();
        this.enteringLetters = new EnteringLetters(this.onKeyPress, this.ALPHABET);
        this.keyboardHandler = new KeyboardHandler(this.onKeyPress, this.ALPHABET);
        this.questAnswer = new QuestAnswer();
        this.modalWindow = new ModalWindow(this.startNewGame);
        this.ListofPushedLetters = [];
      //  console.log(this.keyboardHandler)
        this.curentAnswer = '';
        this.curetnQuesr = '';     
       

   //     this.testWord = 'ГОЛОЛЕД';
        //добавить загрузку из json вопросов и ответов
        this.countOfLife = 6;
        this.countOutputsChar = 0;
        this.init();
        this.startNewGame();
    }

    buttonIsPush = (letter) => {
        console.log(this, letter)
    }

    init(){
       // this.wordOutput.init();
  //      this.enteringLetters.init(this.lettersPush);
    }

    startNewGame = () => {
        this.countOfLife = 6;
        this.countOutputsChar = 0;
       // console.log(this.wordOutput);
        this.questAnswer.newQA();
       this.curentAnswer = this.questAnswer.answer;
       this.curetnQuest = this.questAnswer.quest;
        this.wordOutput.startNewGame(this.curentAnswer.length);
        this.imageOutput.startNewGame();
        this.enteringLetters.startNewGame();


       // this.wordOutput.outputChar('D', 4)
    }

    onKeyPress  = (letter) => {
       // console.log('onKeyPress');
        if (this.ListofPushedLetters.includes(letter)) return;
        this.ListofPushedLetters.push(letter);
        let isLetterNotFind = true;
        console.log(letter, this.curentAnswer );
        for (let i = 0; i <= this.curentAnswer.length - 1; i += 1){
            let char = this.curentAnswer[i];
            console.log(char, letter)
            if (char === letter) {
                isLetterNotFind = false;
                this.wordOutput.outputChar(char, i);
                this.countOutputsChar += 1;
            //    this.enteringLetters.isLetterTrue(button);
            }
        }

        this.enteringLetters.changePushLetter(isLetterNotFind, letter)

        if (isLetterNotFind) {
            this.imageOutput.outputPartOfImage(6 - this.countOfLife);
          //  this.enteringLetters.isLetterFalse(button);
            this.countOfLife -= 1;
        };
      //  if ( this.countOutputsChar === this.testWord.length) alert('вы выиграли')
        if (!this.countOfLife) {
            this.imageOutput.lose();
            this.modalWindow.popUpOpen();
        }//  alert('вы проиграли')
        if(!this.countOfLife || this.countOutputsChar === this.testWord.length) {
            this.modalWindow.popUpOpen();
        }
        
       // this.wordOutput.outputChar();
        

    }

}