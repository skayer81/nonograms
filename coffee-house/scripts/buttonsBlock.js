
export class ButtonsList{
    constructor(buttons, pages){
        this.buttons = buttons;
        this.pages = pages;
        this.blockable = this.getBlockableButtons() ;
        this.buttons.forEach(button => {
            button.addEventListener('click', this.buttonClick.bind(this))
        })
        this.initStarPage()
    }

    initStarPage(){
        let params = window.location.search
        let pageID = params.slice(params.indexOf('=')+1);
        let indexPage = this.pages.indexPageByID(pageID);
        if (indexPage){
            this.pages.indexOfcurentPage = indexPage;
            this.pages.toggleVisiblePage();
            this.blockButtons();
        }
    }

    updateURL(str) {
        if (history.pushState) {
            const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            const newUrl = baseUrl + `?page=${str}`;
            history.pushState(null, null, newUrl);
        }
    }

    getBlockableButtons(){
        let result = [];
        this.buttons.forEach(button => {
            if (button.dataset.blockable) result.push(button)
        })
        return result;
    }

    buttonClick(event){
        const button = event.target;
        if (button.dataset.page && button.dataset.page != this.pages.indexOfcurentPage){
            this.pages.curentPage.classList.remove('visible');
            this.pages.curentPage.classList.add('hidden');
                setTimeout(() => {
                    this.pages.indexOfcurentPage = +button.dataset.page;
                    this.pages.toggleVisiblePage();
                    this.pages.curentPage.classList.add('hidden');
                    this.pages.curentPage.classList.add('visible');
                    this.blockButtons();
                    this.updateURL(this.pages.idCurentPage);
                    if (button.dataset.id) document.location =`#${button.dataset.id}`;
                },800)
        }
        else if (button.dataset.id) document.location =`#${button.dataset.id}`;
    }

    blockButtons(){
        this.blockable.forEach(button => {
            if (button.dataset.page == this.pages.indexOfcurentPage) button.classList.add('disable')
            else button.classList.remove('disable');
        })
    }
}





