import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class Sounds extends CreateBaseComponent{

    SOUNDS = {
        lclick: new Audio('./assets/sounds/lclick.mp3'),
        rclick: new Audio('./assets/sounds/rclick.mp3'),
        clear: new Audio('./assets/sounds/clear.mp3'),
        win: new Audio('./assets/sounds/win.mp3')
      }

    constructor(){
        super();
        this.container = this.createBaseComponent('div', ['sound-container'])
        this.init()
    }

    init(){
        const label = this.createBaseComponent('label', ['label'], this.container, 'включить звуки');
        this.checkbox = this.createBaseComponent('input', ['checkbox'], label);
        this.checkbox.setAttribute('type', 'checkbox');
        // input.addEventListener('change', () => {

        // })
       // const label = this.createBaseComponent('label', ['label'], this.container);
    }
    play(event){
        if (!this.checkbox.checked) return;
        this.SOUNDS[event].play();
    }
}