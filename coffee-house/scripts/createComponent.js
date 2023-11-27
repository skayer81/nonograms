export class CreateBaseComponent{
    createBaseComponent(parent, tag, classes = [], innerHTML = '') {
        let result = document.createElement(tag);
        if (classes) result.classList.add(...classes);
        if (parent) parent.append(result);
        if (innerHTML) result.innerHTML = innerHTML;
        return result;
    }
}