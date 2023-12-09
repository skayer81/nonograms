export class Slider{

    constructor(slider){
        //console.log('slider', slider)
        this.sliderContainer = slider;
        //console.log('slider', this.sliderContainer)
        this._prevButton = this.sliderContainer.querySelector("#sliderLeftButton");
        this._nextButton = this.sliderContainer.querySelector("#sliderRightButton");
        this._prevButton.addEventListener('click', this.moveToLeft);
        this._nextButton.addEventListener('click', this.moveToRigth);
        this.sliderContant = this.sliderContainer.querySelector('#sliderContant');
        this.curentSlide = 0;
        this._offset = 480;
        this.indicators = this.indicarorsInit()
        this.sliderContant.style.left = 0;
        this.startAnimations();
        this.sliderWindow = document.querySelector('.slider-window');
        this.moveStart = 0;
        this.sliderWindow.addEventListener('pointerover', () => {
            console.log('мышка пришла');
          //  if (!this.moveStart) 
               this.indicators[this.curentSlide].style['animation-play-state'] = 'paused';
        })
        this.sliderWindow.addEventListener('pointerout', () => {
           // if (!this.moveStart) 
              console.log('мышка ушла');
               this.indicators[this.curentSlide].style['animation-play-state'] = 'running';
        })
        this.sliderWindow.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        //     console.log('мышка пришла');
        //   //  if (!this.moveStart) 
        //        this.indicators[this.curentSlide].style['animation-play-state'] = 'paused';
        })
        this.sliderWindow.ontouchstart = this.touchstart.bind(this);
        this.sliderWindow.ontouchend = this.ontouchend.bind(this);
        

    }


      //fullscreenImage.addEventListener("touchcancel",  () => console.log('отменили двигаем'));
    //}
    indicarorsInit(){
       // const result = []
        let progress = document.querySelectorAll('.progress');
     //   result.push()
        return progress
    }

    moveToRigth = () => {
        console.log('клик вправо')
        //this.indicators[this.curentSlide].onanimationend  = null
        this.indicators[this.curentSlide].style.animation = ''
       // this.indicators[this.curentSlide].value = 0;
        this.curentSlide += 1;
        if (this.curentSlide > 2) this.curentSlide = 0;
        this.indicators[this.curentSlide].value = 100;
        this.sliderContant.style.left = -this.curentSlide * this._offset + "px";
        this.startAnimations()
    }

    moveToLeft = () => {
        this.indicators[this.curentSlide].onanimationend  = null
        this.indicators[this.curentSlide].style.animation = ''
        this.curentSlide -= 1;
        if (this.curentSlide < 0) this.curentSlide = 2;
        this.sliderContant.style.left = -this.curentSlide * this._offset + "px";
        this.startAnimations()
    }
    ontouchend(event){
        this.indicators[this.curentSlide].style['animation-play-state'] = 'running';
        let moveEnd = event.changedTouches[0].screenX;
        console.log('toucend',moveEnd)
        
        if (moveEnd - this.moveStart > 100) this.moveToLeft();
        if (this.moveStart - moveEnd > 100) this.moveToRigth();
        this.moveStart = 0;
    } 
    
     touchstart(event){
        this.indicators[this.curentSlide].style['animation-play-state'] = 'paused';
       this.moveStart = event.changedTouches[0].screenX;
       console.log('touchstart', this.moveStart)
     };


    startAnimations(){
        console.log('старт анимации индикатора')

       // this.indicators[this.curentSlide].style.transitionDuration = '5s';
        this.indicators[this.curentSlide].style.animation = 'progressAuto linear 5s';// value = 100;
       // this.indicators[this.curentSlide].
        this.indicators[this.curentSlide].onanimationend = this.moveToRigth;
      //  this.indicators[this.curentSlide].ontransitionend = this.moveToRigth.bind(this)
    }











}
console.log('test', document.getElementById('slider'))
const slider = new Slider(document.getElementById('slider'))


/////////////////////////////////// slider in About
class Slider2 {
    constructor(sliderContainer, widthOfImg) {
        this._sliderContainer = sliderContainer;
        this._offset = widthOfImg;
        this._buttons = sliderContainer.querySelectorAll(".button");
        this._prevButton = sliderContainer.querySelector(".prev");
        this._nextButton = sliderContainer.querySelector(".next");
        this._sliderWindow = sliderContainer.querySelector(".slider-window");
        this._currentButton = 0;
        this._quantityOfButtons = this._buttons.length;
        this._sliderContainer.addEventListener('click', this._sliderClick);
    };

    _changeActivButton = (counter) => {
        this._buttons[this._currentButton].classList.toggle("button_active")
        this._currentButton = counter
        this._buttons[this._currentButton].classList.toggle("button_active")
    }

    _changeActivArrow = () => {
        this._prevButton.classList.remove('unActive');
        this._nextButton.classList.remove('unActive');
        switch (this._currentButton) {
            case 0: this._prevButton.classList.add('unActive');
                break;
            case this._quantityOfButtons - 1: this._nextButton.classList.add('unActive');
        }
    }

    _sliderClick = (event) => {
        if (event.target.classList.contains("button")) {
            this._buttons.forEach((element, index) => {
                if (element == event.target) {
                    if (index == this._currentButton) return
                    this._changeActivButton(index)
                }
            })
        }
        if ((event.target == this._prevButton) && (this._currentButton > 0)) this._changeActivButton(this._currentButton - 1)
        if ((event.target == this._nextButton) && (this._currentButton < this._quantityOfButtons - 1)) this._changeActivButton(this._currentButton + 1)
        this._sliderWindow.style.left = -this._currentButton * this._offset + "px";
        this._changeActivArrow();
    }
}
//let aboutSlider = new Slider(document.querySelector(".about-slider"), 475)