import { EnteringLetters } from "../enteringLetters/enteringLetters";
import { ImageOutput } from "../imageOutput/imageOutput";
import { WordOutput } from "../wordOutput/wordOutput";

export class ApplicationManagement{
    constructor(){
        this.enteringLetters = new EnteringLetters();
        this.imageOutput = new ImageOutput();
        this.wordOutput = new WordOutput();
    }

    lettersPush(){
        let letterIsFind = false;
        
        this.wordOutput.outputChar();
        this.imageOutput.outputPartOfImage();

    }

}