import { EnteringLetters } from "../enteringLetters/enteringLetters.js";
import { ImageOutput } from "../imageOutput/imageOutput.js";
import { WordOutput } from "../wordOutput/wordOutput.js";
import { KeyboardHandler } from "../keyboardHandler/keyboardHandler.js";
import { ModalWindow } from "../modalWindow/modalWindow.js";
import { QuestAnswer } from "../questAnswerModul/questAnswerModul.js";
import { CounterOutput } from "../counterOutput/counterOutput.js";
import { QuestOutput } from "../questOutput/questOutput.js";
import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ApplicationManagement extends CreateBaseComponent{

    ALPHABET = 'АБВГДЕЗЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    constructor(){
        super();
        this.imageOutput = new ImageOutput();
        this.wordOutput = new WordOutput();
        this.enteringLetters = new EnteringLetters(this.onKeyPress, this.ALPHABET);
        this.keyboardHandler = new KeyboardHandler(this.onKeyPress, this.ALPHABET);
        this.questAnswer = new QuestAnswer();
        this.counterOutput = new CounterOutput()
        this.questOutput = new QuestOutput();
        this.modalWindow = new ModalWindow(this.startNewGame);
        this.listofPushedLetters = [];
        this.init();
    }

    init(){
        this._viewBuilder();
        this.startNewGame();
    }

    startNewGame = () => {
        this.countOfError = 0;
        this.countOutputsChar = 0;
        this.listofPushedLetters = [];
        this._isGameStart = true;
        this.questAnswer.newQA();
        this.curentAnswer = this.questAnswer.answer;
        this.curetnQuest = this.questAnswer.quest;
        this.wordOutput.startNewGame(this.curentAnswer.length);
        this.counterOutput.startNewGame(6);
        this.questOutput.startNewGame(this.curetnQuest)
        if (this.imageOutput.isInit) this.imageOutput.startNewGame()
        else this.imageOutput.isInit = true;
        this.enteringLetters.startNewGame();
        console.log(`${this.curentAnswer} это - ${this.curentAnswer}`);
    }

    _viewBuilder(){
        const appContainer = this.createBaseComponent(document.body, 'div', ['app-container']);
        const appContainerTop = this.createBaseComponent(appContainer, 'div', ['app-container__top']);
        const appContainerDown = this.createBaseComponent(appContainer, 'div', ['app-container__down']);
        appContainerTop.append(this.imageOutput.container);
        const appContainerTopRight = this.createBaseComponent(appContainerTop, 'div', ['app-container__top-rigth']);
        appContainerTopRight.append(this.questOutput.container);
        appContainerTopRight.append(this.counterOutput.container);
        appContainerDown.append(this.wordOutput.container);
        appContainerDown.append(this.enteringLetters.container);
    }

    onKeyPress  = (letter) => {
        if (this.listofPushedLetters.includes(letter) || !this._isGameStart) return;
        this.listofPushedLetters.push(letter);
        let isLetterNotFind = true;
        for (let i = 0; i <= this.curentAnswer.length - 1; i += 1){
            let char = this.curentAnswer[i];
            if (char === letter) {
                isLetterNotFind = false;
                this.wordOutput.outputChar(char, i);
                this.countOutputsChar += 1;
            }
        }

        this.enteringLetters.changePushLetter(isLetterNotFind, letter)

        if (isLetterNotFind) {
            this.imageOutput.outputPartOfImage(this.countOfError);
            this.countOfError += 1;
            this.counterOutput.counterOutput(this.countOfError)
        };

        if (this.countOfError === 6) {
            this.imageOutput.lose();
            this.modalWindow.popUpOpen(this.curetnQuest, this.curentAnswer, false);
            this._isGameStart = false;
        }
        if(this.countOutputsChar === this.curentAnswer.length) {
            this.imageOutput.win()
            this.modalWindow.popUpOpen(this.curetnQuest, this.curentAnswer, true);
            this._isGameStart = false;
        }
    }
}