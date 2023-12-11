import {CreateFormComponent} from '../baseComponentCreate/createComponent.js'

export class CreateForm extends CreateFormComponent{
    constructor(){
        super()
        this.countOfRadio = 3;
        this.countOrCheck = 3;
        this.sizeChar = ['s','m','l']
        this.form = this._createForm()
    }


    get getForm(){
        return this.form;
    }

    set labelSize(labels){
        [this.labelNameSize1.innerHTML, this.labelNameSize2.innerHTML, this.labelNameSize3.innerHTML] = labels;
    }

    set labelAdditives(labels){
        [this.labelNameAdditive1.innerText , this.labelNameAdditive2.innerText , this.labelNameAdditive3.textContent] = labels;
    }

    clearForm(){
        this.inputAdditive1.checked = false;
        this.inputAdditive2.checked = false;
        this.inputAdditive3.checked = false;
        this.inputSize1.checked = true;
    }

    _createRadio(number, parent){
        this[`inputSize${number}`] = this.createFormComponent(parent, 'input', ['input'], {type: 'radio', name:'sizes', id:`size${number}`, value: this.sizeChar[number-1]});
        this[`labelSize${number}`] = this.createFormComponent(parent, 'label', ['label'], {for: `size${number}`});
        this.createBaseComponent(this[`labelSize${number}`], 'span', ['icon'],this.sizeChar[number-1].toUpperCase());
        this[`labelNameSize${number}`] = this.createBaseComponent(this[`labelSize${number}`], 'span', ['name']);
    }

    _createChekBox(number, parent){
        this[`inputAdditive${number}`] = this.createFormComponent(parent, 'input', ['input'], {type: 'checkbox', name: `add${number}`, id:`add${number}`});
        this[`labelAdditive${number}`] = this.createFormComponent(parent, 'label', ['label'], {for: `add${number}`});
        this.createBaseComponent(this[`labelAdditive${number}`], 'span', ['icon'], number);
        this[`labelNameAdditive${number}`] = this.createBaseComponent(this[`labelAdditive${number}`], 'span', ['name']);
    }

    _createForm(){
        const form = this.createFormComponent(0, 'form', [], {name:'popUpForm'})// CreateFormComponent(0, 'fofm')
        const fieldsetRadio = this.createBaseComponent(form, 'fieldset',['fieldset']);
        this.createBaseComponent(fieldsetRadio, 'legend', ['legeng'], 'Size');
        for(let i = 1; i <= this.countOfRadio; i++){
            this._createRadio(i, fieldsetRadio)
        }
        const fieldsetCheckbox = this.createBaseComponent(form, 'fieldset',['fieldset']);
        this.createBaseComponent(fieldsetCheckbox, 'legend', ['legeng'], 'Additives');
        for(let i = 1; i <= this.countOrCheck; i++){
            this._createChekBox(i, fieldsetCheckbox)
        }
        return form;
    }

}
