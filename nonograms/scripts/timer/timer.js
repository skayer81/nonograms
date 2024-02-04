import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class Timer extends CreateBaseComponent{
    DEFAULT_MIN = '00';
    DEFAULT_SEC = '00';

    constructor(){
        super();
        this.container = this.createBaseComponent('div', ['timer-container'], document.body);//////////1
        this.init();
        this.isTimerStart = false;
    }

    init(){
        this.min = this.createBaseComponent('div', ['timer-min'], this.container, this.DEFAULT_MIN); ////////////2
        this.createBaseComponent('div', ['timer-separator'], this.container, ':');
        this.sec = this.createBaseComponent('div', ['timer-sec'], this.container, this.DEFAULT_SEC); ///////////  3
    }

    start(){
        if (!this.isTimerStart){
            this.currentTime = 0; /////////////// 4
            this.isTimerStart = true;
            this.timer = setInterval(() => { ////////////   5
                this.timeOutput();
                this.currentTime++;
            }, 1000);
        }
    }

    stop(){
        clearInterval(this.timer);   
        this.isTimerStart = false;     
    }

    getTime(){
        return this.currentTime;
    }

    timeOutput(){
        const min =  String(Math.trunc(this.currentTime / 60)).padStart(2, '0');
        const sec = String(this.currentTime % 60).padStart(2, '0');
     //   console.log(min, sec)
        this.min.innerText = min;
        this.sec.innerText = sec;
    }



}