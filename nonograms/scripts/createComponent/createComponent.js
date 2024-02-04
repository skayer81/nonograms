export class CreateBaseComponent{
    /**
     *
     * @param {object} parent - Родитель или null
     * @param {string} tag  - Тег: 'div'
     * @param {array} classes - массив классов (необязательный) ['class1', 'class2']
     * @param {string} innerHTML  - текст(необязательный)
     * @returns
     */
    createBaseComponent(tag, classes = [], parent = null, innerHTML = '') {
        let result = document.createElement(tag);
        if (classes.length > 0) result.classList.add(...classes);
        if (parent) parent.append(result);
        if (innerHTML) result.innerHTML = innerHTML;
        return result;
    }
}

export class CreateButton extends CreateBaseComponent{
    constructor(){
        super()
    }
    /**
      * 
      * @param {object} parent Родитель или null
      * @param {string} tag 
      * @param {array} classes 
      * @param {object} atributes обьект пар ключ:значение
      * @returns 
      */
    createButton(classes = [], atributes, innerHTML, callback, parent){
        const result = this.createBaseComponent('button', classes, parent, innerHTML);
        for (let key in atributes){
            result.setAttribute(key, atributes[key]);
        }
        result.addEventListener('click', callback);
        return result;
    }
}