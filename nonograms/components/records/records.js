import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class Records extends CreateBaseComponent{

    addRecord = (name, width, time) => {
        let level;
        if (width <= 5) {
            level = 'easy';
        }
        if (width > 5 && elem.width <= 10 ) {
            level = 'medium';
        }
        if (width > 10) {
            level = 'hard';
        }
        const result = {
            name,
            level,
            time
        }
        let records =  JSON.parse(localStorage.getItem('Skayer81Records')) || []
        records.push(result);
        if (records.length > 5) {
            records.shift();
        }
        localStorage.setItem('Skayer81Records', JSON.stringify(records));
    }

    getRecords = () =>{
        const records = JSON.parse(localStorage.getItem('Skayer81Records')) || []
        if (records.length > 1){
            records.sort((a, b) => +a.time - +b.time)
        }
        records.forEach(element => {
            element.time = `${String(Math.trunc(element.time / 60)).padStart(2, '0')}:${String(element.time % 60).padStart(2, '0')}`
        });
        return records.length > 0 ? records : null;

    }
}