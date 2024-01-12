
import { QA } from "./qa.js";

export class QuestAnswer {
    constructor(){
        this._questAnswer = QA;
        this._numberCurentQA; 
       // this.newQA();
        this._newQAIsGenerate = 1;
        // for (let i = 0; i<100; i++){
        //     console.log(this.newQA())
        // }
    }

    get quest(){
        return this._questAnswer[this._numberCurentQA].quest;
    }

    get answer(){
      //  console.log(this._questAnswer,this._numberCurentQA )
        console.log(this._questAnswer[this._numberCurentQA].answer);
        return this._questAnswer[this._numberCurentQA].answer.toUpperCase();

    }

    newQA(){
        let result;
        do{
            result = Math.floor(Math.random() * this._questAnswer.length);
           // console.log(result)
        }
        while (result === this._numberCurentQA);
      //  console.log('result', result)
        this._numberCurentQA = result;
      //  console.log('this._numberCurentQA', this._numberCurentQA)
    }






}