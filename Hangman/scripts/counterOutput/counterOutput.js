import { CreateBaseComponent } from "../createComponent/createComponent";

export class counterOutput extends CreateBaseComponent{
    constructor(){
        super()
        this.init()
    }

    init(){
        this.container = this.createBaseComponent(document.body, 'div');

    }

    counterOutput(counter){
        this.container.innerText = counter
    }


}