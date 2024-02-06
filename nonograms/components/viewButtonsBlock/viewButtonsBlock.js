import { CreateButton } from "../createComponent/createComponent.js";
import { LoadSaveGame } from "../loadSaveGame/loadSaveGame.js";


export class ViewButtons extends CreateButton{
    constructor(showSolution, getData, setData, restart, randomGame, showRecords){
        super();
        this.loadSave = new LoadSaveGame();
        this.setData = setData;
        this.getData = getData;
        this.container = this.createBaseComponent('div', ['buttons-container']);

        this.randomGame = this.createButton(['button'], {type: 'button'}, 'Случайная игра', randomGame, this.container);
        this.restartBtn = this.createButton(['button'], {type: 'button'}, 'Перезапустить игру', restart, this.container);       
        this.showsolutionBtn = this.createButton(['button'], {type: 'button'}, 'Показать решение', showSolution, this.container);
        this.saveGameBtn = this.createButton(['button'], {type: 'button'}, 'Сохранить игру', this.saveGame, this.container);
        this.loadGameBtn = this.createButton(['button'], {type: 'button'}, 'Загрузить игру', this.loadGame, this.container);
        this.showRecordsBtn = this.createButton(['button'], {type: 'button'}, 'Показать рекорды', showRecords, this.container);
    
    }

    saveGame = () =>{
        const data = this.getData();
        this.loadSave.saveGame(data);
      //  console.log(data);

    }

    loadGame = () =>{
        const data = this.loadSave.loadGame()
       // const data = this.loadGameCallback();
        this.setData(data)
    }

}