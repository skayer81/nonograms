import { CreateBaseComponent } from "../createComponent/createComponent.js";

export class Records extends CreateBaseComponent{
   // constructor(){
        //this.window = 
   // }
    // createDefaultRecord = () =>{
    //     let lvlName = ['level1','level2','level3','level4']
    //     let result = {}
    //     for (let lvl of lvlName) {
    //         result[lvl] =  new Array(10).fill({name: 'Anonymous', time: 999})
    //     }
    //     return result
    // }решенная головоломка (либо название, либо картинка, либо и то, и другое); сложность; результат секундомера.

    addRecord = (name, width, time) => {
      //  console.log('добавляем рекорд')
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
        //.log(records)
        // records[level].push({name:playerName, time: time });
        // records[level].sort((a, b) => a.time -b.time); 
        // records[level] = records[level].slice(0, 10);
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
        return records;
        

     //   const min =  String(Math.trunc(this.currentTime / 60)).padStart(2, '0');
       // const sec = String(this.currentTime % 60).padStart(2, '0');
    }
    // loadRecords = () =>{
    //     // this.createDefaultRecord();
    //     return records;
    // }

    // isRecordTop = (time, level) =>{
    //     let records =  this.loadRecords()
    //     return records[level].sort((a, b) => a.time - b.time)[records[level].length-1].time > time
    // }
}