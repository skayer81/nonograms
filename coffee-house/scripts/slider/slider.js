export class Slider{

    constructor(slider){
        this.sliderContainer = slider;
        this._prevButton = this.sliderContainer.querySelector("#sliderLeftButton");
        this._nextButton = this.sliderContainer.querySelector("#sliderRightButton");
        this._prevButton.addEventListener('click', this.moveToLeft);
        this._nextButton.addEventListener('click', this.moveToRigth);
        this.sliderContant = this.sliderContainer.querySelector('#sliderContant');
        this.curentSlide = 0;
        this._offset = 100;
        this.indicators = this.indicarorsInit()
        this.sliderContant.style.left = 0;
        this.startAnimations();
        this.moveStart = 0;
        this.sliderWindow = document.querySelector('.slider-window');
        this.addEvents()
    }
    addEvents(){
        this.sliderWindow.addEventListener('pointerenter', () => {
            this.indicators[this.curentSlide].style['animation-play-state'] = 'paused';
        })
        this.sliderWindow.addEventListener('pointerleave', () => {
            this.indicators[this.curentSlide].style['animation-play-state'] = 'running';
        })
        this.sliderWindow.addEventListener('contextmenu', (event) => {
            event.preventDefault();
       // this.indicators[this.curentSlide].style['animation-play-state'] = 'paused';
        })
        this.sliderWindow.addEventListener('pointerdown', (event) => {
            this.moveStart = event.pageX;
        })
        this.sliderWindow.addEventListener('pointerup', (event) => {
            let moveEnd = event.pageX;
            if (moveEnd - this.moveStart > 25) this.moveToLeft();
            if (this.moveStart - moveEnd > 25) this.moveToRigth();
            this.moveStart = 0;
        })
        // this.sliderWindow.addEventListener('pointermove', (event) => {
        //     console.log('pointermove', event.pageX);
        // })
    }

    indicarorsInit(){
        let progress = document.querySelectorAll('.progress');
        return progress
    }

    moveToRigth = () => {
        this.indicators[this.curentSlide].style.animation = ''
        this.curentSlide += 1;
        if (this.curentSlide > 2) this.curentSlide = 0;
        this.indicators[this.curentSlide].value = 100;
        this.sliderContant.style.left = -this.curentSlide * this._offset + "%";
        this.startAnimations()
    }

    moveToLeft = () => {
        this.indicators[this.curentSlide].style.animation = ''
        this.curentSlide -= 1;
        if (this.curentSlide < 0) this.curentSlide = 2;
        this.sliderContant.style.left = -this.curentSlide * this._offset + "%";
        this.startAnimations()
    }

    startAnimations(){
        this.indicators[this.curentSlide].style.animation = 'progressAuto linear 5s';
        this.indicators[this.curentSlide].onanimationend = this.moveToRigth;
    }
}
const slider = new Slider(document.getElementById('slider'));