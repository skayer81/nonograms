import { nonograms } from "./data.js";

export class Nonograms{
    constructor(){
        this.nonograms = nonograms;
        //глобальные переменные
    }

    getRandom(){

    }

    getRandomEasy(){
        const easyNonograms = this.nonograms.filter(elem => elem.heigth === 5);

        return easyNonograms[ Math.floor(Math.random() * (easyNonograms.length + 1))]; 

    }

    getList(){

    }

}