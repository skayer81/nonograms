import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class SelectLevel extends CreateBaseComponent{
    constructor(levels, callback){
        super();
        this.levels = levels;
        this.callback = callback;
        this.container = this.createBaseComponent('div', ['levels'], document.body)
        this.titles = []
        this.createView();
    }

    createView(){
        this.form = this.createBaseComponent('form', ['levels__form'], this.container);

        for (let level in this.levels){
           // console.log(level);
            let select = this.createBaseComponent('select', ['levels__select'], this.form);
            select.setAttribute('name', level);
           // select.disabled = true// setAttribute('name', level);

            select.addEventListener('change', (event) => {
                //console.log(select.value)
                // for (let i = 0; i < this.titles.length; i++){
                //     this.titles[i].select = true;
                // }
                this.callback(select.value);

            })
            let firstElem =  this.createBaseComponent('option', ['levels__option'], select, level);
            this.titles.push(firstElem);
            firstElem.disabled = true;
            for (let j = 0; j < this.levels[level].length; j++){
                let options = this.createBaseComponent('option', ['levels__option'], select, this.levels[level][j].name);
                options.setAttribute('value', this.levels[level][j].id)
            }
        }

    }
}