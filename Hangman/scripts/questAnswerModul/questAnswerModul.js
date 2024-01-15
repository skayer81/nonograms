
import { QA } from "./qa.js";

export class QuestAnswer {
    constructor(){
        this._questAnswer = QA;
        this._numberCurentQA;
        this._newQAIsGenerate = 1;
    }

    get quest(){
        return this._questAnswer[this._numberCurentQA].quest;
    }

    get answer(){
        return this._questAnswer[this._numberCurentQA].answer.toUpperCase();
    }

    newQA(){
        let result;
        do{
            result = Math.floor(Math.random() * this._questAnswer.length);
        }
        while (result === this._numberCurentQA);
        this._numberCurentQA = result;
    }






}