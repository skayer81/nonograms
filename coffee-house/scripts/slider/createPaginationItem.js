import {CreateBaseComponent} from './../createComponent.js'

export class CreatePaginationItem extends CreateBaseComponent{
    constructor(){
        super()
        this._paginationItem = {};
        this._paginationItem.item = this.createBaseComponent()
        this._paginationItem.active = 0;
        this._paginationItem.width = 0;
    }

    get paginationItem(){
        return this._paginationItem
    }

}