export class LoadSaveGame{

    FIELD_NAME = 'skayer81Nonogram';

    saveGame(data){
        localStorage.setItem(this.FIELD_NAME, JSON.stringify(data));
    }

    loadGame(){
        let data =  JSON.parse(localStorage.getItem(this.FIELD_NAME));
        return data;
    }

    hasSave(){
        //return
    }
}