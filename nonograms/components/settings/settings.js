import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class Settings extends CreateBaseComponent{
    constructor(themeCallback, soundCallback){
        super()
        this.soundCallback = soundCallback;
        this.themeCallback = themeCallback;
        this.soundChangeContainer = this.createBaseComponent('div', ['sound-container']);
        this.createSoundChange();
    }

    createSoundChange(){}
}