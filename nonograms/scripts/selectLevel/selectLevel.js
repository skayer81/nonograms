import { CreateBaseComponent } from "../createComponent/createComponent";

export class SelectLevel extends CreateBaseComponent{
    constructor(levels){
        super();
        this.levels = levels
        this.container = this.createBaseComponent('div', ['levels'], document.body)
        this.createView();
    }

    createView(){
        this.form = this.createBaseComponent('form', ['levels__form'], this.container);
        for (let i = 0; i < this.levels.length; i++){
            let select = this.createBaseComponent('select', ['levels__select'], this.form);
            for (let j = 0; j < this.levels[i].length; j++){
                let options = this.createBaseComponent('options', ['levels__options'], select, this.levels[i].name);
            }
        }
    }
}