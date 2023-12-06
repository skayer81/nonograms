export class CreateBaseComponent{
    /**
     * 
     * @param {*} parent 
     * @param {*} tag 
     * @param {*} classes 
     * @param {*} innerHTML 
     * @returns 
     */
    createBaseComponent(parent, tag, classes = [], innerHTML = '') {
        let result = document.createElement(tag);
        if (classes) result.classList.add(...classes);
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
      * @param {*} parent 
      * @param {*} tag 
      * @param {*} classes 
      * @param {*} atributes 
      * @returns 
      */
    createFormComponent(parent, tag, classes, atributes){
        const result = this.createBaseComponent(parent, tag, classes);
        for (let key in atributes){
          //  console.log('atr');
           // console.log(key);
          //  console.log(atributes[key]);
            result.setAttribute(key, atributes[key]);
        }
        return result;
    }


}