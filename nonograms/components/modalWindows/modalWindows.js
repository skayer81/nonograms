import { ViewModalWindow } from './viewModalWindow.js'
import { CreateBaseComponent } from '../createComponent/createComponent.js';

export class ModalWindows extends CreateBaseComponent{
    constructor(){
        super();        
        this.modalWindows = new ViewModalWindow;
    }
//this.currentNonogram.name, this.currentNonogram.width, this.timer.getTime()
    showWinWindow = (name, time) =>{
      //  console.log('выводим победу');
        const title = this.createBaseComponent('h2', [], null, `Поздравляем!`)
        const content = this.createBaseComponent('div', [], null, `Нонограмму: '${name}' `) 
        const content2 = this.createBaseComponent('div', [], null, `вы открыли за ${time} сек.`)
        this.modalWindows.removeContent();
        this.modalWindows.addContent([title, content, content2]);
        this.modalWindows.open();

    }

    showRecordsWindow(records){
        this.modalWindows.removeContent();
        const title = this.createBaseComponent('h2', ['modal-title'], null, `Таблица рекордов`)
        //console.log(records)
        const table = this.createBaseComponent('table', ['records-table'])

         let trOfHead = this.createBaseComponent('tr', [], table);
       // let title1 = 
         this.createBaseComponent('th', [],  trOfHead, 'Название');
         this.createBaseComponent('th', [],  trOfHead, 'Сложность');
         this.createBaseComponent('th', [],  trOfHead, 'Время');

      //  let title2 =  createBaseComponent(trOfHead, 'th');
        for (let i = 0; i < records.length; i++){
            let tr = this.createBaseComponent('tr', [], table);
            this.createBaseComponent('td', [],  tr, records[i].name);
            this.createBaseComponent('td', [],  tr, records[i].level);
            this.createBaseComponent('td', [],  tr, records[i].time);
            // let name = createBaseComponent(tr, 'td');
            // name.innerHTML = recordsOfLevel[i].name;
            // let time = createBaseComponent(tr, 'td');
 //           time.innerHTML = `${recordsOfLevel[i].time} сек.` 
        }

        this.modalWindows.addContent([title, table]);
      //  this.modalWindows.addContent(table);
        this.modalWindows.open();

        // function createTable(recordsOfLevel){
        //     let result = createBaseComponent(0, 'table', ['table']);
        //     let trOfHead = createBaseComponent(result, 'tr');
        //     let title1 =  createBaseComponent(trOfHead, 'th');
        //     let title2 =  createBaseComponent(trOfHead, 'th');
        //     title1.innerHTML = 'Имя';
        //     title2.innerHTML = 'Время';
        //     for (let i = 0; i < recordsOfLevel.length; i++){
        //         let tr = createBaseComponent(result, 'tr');
        //         let name = createBaseComponent(tr, 'td');
        //         name.innerHTML = recordsOfLevel[i].name;
        //         let time = createBaseComponent(tr, 'td');
        //         time.innerHTML = `${recordsOfLevel[i].time} сек.` 
        //     }
        //     return result;
        // }


    }
}