import {createBaseComponent} from '../logic/createComponent.js';
import {createBorderOfWindow} from './borderOfWindow.js';
import {Records} from '../logic/records.js';

export function openRecordsWindow(){
    let records = (new Records).loadRecords();
    let modal = document.getElementById('recordsWindow');
    if (modal) document.body.removeChild(modal)
    else{
        let contentContainer = createBaseComponent(document.body, 'div', ['recordsWindowContent']);
        for (let i = 1; i <= 4; i++){
            let input = createBaseComponent(contentContainer, 'input', [], `reclevel${i}`);
            input.setAttribute('type', 'radio')
            input.setAttribute('name', 'reclevel')
            input.setAttribute('value', `reclevel${i}`)
            if (i === 1) input.checked = true
        }
        let labelContainer = createBaseComponent(contentContainer, 'div', ['labelContainer']);
        let recordContent = createBaseComponent(contentContainer, 'div', ['recordContent']);
        for (let i = 1; i <= 4; i++){
            let label = createBaseComponent(labelContainer, 'label', ['recordLabel']);
            label.setAttribute('for', `reclevel${i}`)
            label.innerHTML = ['Новичок','Любитель','Профессионал','Другой...'][i-1]
            let record = createBaseComponent(recordContent, 'div', [`recordContent${i}`]);
          //  record.innerHTML = ['рекорды1','рекорды2','рекорды3','рекорды4'][i-1]; 
            record.append(createTable(records[`level${i}`]))
        }    
        let button = createBaseComponent(contentContainer, 'button', [`button`]);
        button.innerHTML = 'Ok'  
        let modal = createBorderOfWindow(contentContainer, ['recordsWindow'], 'recordsWindow');
        button.addEventListener('click',() => {document.body.removeChild(modal)}); 
        }
}

function createTable(recordsOfLevel){
    let result = createBaseComponent(0, 'table', ['table']);
    let trOfHead = createBaseComponent(result, 'tr');
    let title1 =  createBaseComponent(trOfHead, 'th');
    let title2 =  createBaseComponent(trOfHead, 'th');
    title1.innerHTML = 'Имя';
    title2.innerHTML = 'Время';
    for (let i = 0; i < recordsOfLevel.length; i++){
        let tr = createBaseComponent(result, 'tr');
        let name = createBaseComponent(tr, 'td');
        name.innerHTML = recordsOfLevel[i].name;
        let time = createBaseComponent(tr, 'td');
        time.innerHTML = `${recordsOfLevel[i].time} сек.` 
    }
    return result;
}