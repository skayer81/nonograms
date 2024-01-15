export class CreateBaseComponent{
    /**
     *
     * @param {object} parent - Родитель или 0
     * @param {string} tag  - Тег: 'div'
     * @param {array} classes - массив классов (необязательный) ['class1', 'class2']
     * @param {string} innerHTML  - текст(необязательный)
     * @returns
     */
    createBaseComponent(parent, tag, classes = [], innerHTML = '') {
        let result = document.createElement(tag);
        if (classes.length > 0) result.classList.add(...classes);
        if (parent) parent.append(result);
        if (innerHTML) result.innerHTML = innerHTML;
        return result;
    }
}

export class CreateFormComponent extends CreateBaseComponent{
    constructor(){
        super()
    }
    /**
      * 
      * @param {object} parent Родитель или 0
      * @param {string} tag 
      * @param {array} classes 
      * @param {object} atributes обьект пар ключ:значение
      * @returns 
      */
    createFormComponent(parent, tag, classes, atributes, innerHTML){
        const result = this.createBaseComponent(parent, tag, classes, innerHTML);
        for (let key in atributes){
            result.setAttribute(key, atributes[key]);
        }
        return result;
    }
}