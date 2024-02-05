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
    // }

    addRecord = (result) => {
        let records =  JSON.parse(localStorage.getItem('Skayer81records')) || []
        records.push(result);
        if (records.length > 5) {
            records.shift();
        }
        // records[level].push({name:playerName, time: time });
        // records[level].sort((a, b) => a.time -b.time); 
        // records[level] = records[level].slice(0, 10);
        localStorage.setItem('Skayer81records', JSON.stringify(records));

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