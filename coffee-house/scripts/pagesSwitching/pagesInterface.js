export class PagesInterface{
    constructor(pages){
        this.pages = pages;
        this._indexOfcurentPage = 0;
    }

    get indexOfcurentPage(){
        return this._indexOfcurentPage
    }

    set indexOfcurentPage(indexOfcurentPage){
        this._indexOfcurentPage = indexOfcurentPage
    }

    get curentPage(){
        return this.pages[this._indexOfcurentPage]
    }

    get idCurentPage(){
        return this.pages[this._indexOfcurentPage].dataset.id;
    }

    indexPageByID(id){
        let result;
        this.pages.forEach((page, index) => {
            if (page.dataset.id ===id)  result = index;
        })
        return result;
    }

    toggleVisiblePage(){
        this.pages.forEach((page, index) => {
            if (index == this._indexOfcurentPage) page.hidden = false
            else page.hidden = true
        })
    }
}