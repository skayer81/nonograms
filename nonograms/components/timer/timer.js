import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class Timer extends CreateBaseComponent{
    DEFAULT_MIN = '00';
    DEFAULT_SEC = '00';

    constructor(){
        super();
        this.container = this.createBaseComponent('div', ['timer-container']);
        this.init();
        this.isTimerStart = false;
    }

    init(){
        this.min = this.createBaseComponent('div', ['timer-min'], this.container, this.DEFAULT_MIN); 
        this.createBaseComponent('div', ['timer-separator'], this.container, ':');
        this.sec = this.createBaseComponent('div', ['timer-sec'], this.container, this.DEFAULT_SEC); 
    }

    start(){
        this.timer = setInterval(() => { 
            this.currentTime++;
            this.timeOutput();
        }, 1000);
    }

    stop(){
        clearInterval(this.timer);   
        this.isTimerStart = false;     
    }

    getTime(){
        return this.currentTime;
    }

    setTime(time = 0){
        this.stop();
        this.currentTime = Number(time);
        this.timeOutput();
    }

    timeOutput(){
        const min =  String(Math.trunc(this.currentTime / 60)).padStart(2, '0');
        const sec = String(this.currentTime % 60).padStart(2, '0');
        this.min.innerText = min;
        this.sec.innerText = sec;
    }



}