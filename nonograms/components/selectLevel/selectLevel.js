import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class SelectLevel extends CreateBaseComponent{
    constructor(levels, callback){
        super();
        this.levels = levels;
        this.callback = callback;
        this.container = this.createBaseComponent('div', ['levels'], document.body)
        this.createView();
    }

    createView(){
        this.form = this.createBaseComponent('form', ['levels__form'], this.container);

        for (let level in this.levels){
           // console.log(level);
            let select = this.createBaseComponent('select', ['levels__select'], this.form);
            select.setAttribute('name', level);
           // select.disabled = true// setAttribute('name', level);

            select.addEventListener('change', () => {
                //console.log(select.value)
                this.callback(select.value);

            })
            this.createBaseComponent('option', ['levels__option'], select, level);
            for (let j = 0; j < this.levels[level].length; j++){
                let options = this.createBaseComponent('option', ['levels__option'], select, this.levels[level][j].name);
                options.setAttribute('value', this.levels[level][j].id)
            }
        }

    }
}