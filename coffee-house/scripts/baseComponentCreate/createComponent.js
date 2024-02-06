export class CreateBaseComponent{
    /**
     * 
     * @param {*} parent - Родитель или 0
     * @param {*} tag  - тег
     * @param {*} classes - массив классов (необязательный)
     * @param {*} innerHTML  - текст(необязательный)
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
    //     super(parent, tag, classes)
     }
     /**
      * 
      * @param {*} parent Родитель или 0
      * @param {*} tag 
      * @param {*} classes 
      * @param {*} atributes 
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