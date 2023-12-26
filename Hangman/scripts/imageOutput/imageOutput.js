import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class ImageOutput extends CreateBaseComponent{

    test = ['голова','туловище','левая рука','правая рука','правая нога','левая нога']

    constructor(){
        super();
        this.init();

    }

    init(){
        this.container = this.createBaseComponent(document.body, 'div', ['pictureContainer']);
    }

    outputPartOfImage(index){
        this.container.innerHTML = this.container.innerHTML + ' + ' + this.test[index]

    }

    win(){
        
    }

    lose(){
        
    }


}