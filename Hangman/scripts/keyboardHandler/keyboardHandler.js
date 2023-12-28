export class KeyboardHandler{
    //ALPHABET = 'АБВГДЕЗЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    CODES = {
     //   'Backquote' : 'Ё',
     //   'KeyQ' : 'Й',
        'KeyW' : 'Ц',
        'KeyE' : 'У',
        'KeyR' : 'К',
        'KeyT' : 'Е',
        'KeyY' : 'Н',
        'KeyU' : 'Г',
        'KeyI' : 'Ш',
        'KeyO' : 'Щ',
        'KeyP' : 'З',
        'BracketLeft' : 'Х',
        'BracketRight' : 'Ъ',
        'KeyA' : 'Ф',
        'KeyS' : 'Ы',
        'KeyD' : 'В',
        'KeyF' : 'А',
        'KeyG' : 'П',
        'KeyH' : 'Р',
        'KeyJ' : 'О',
        'KeyK' : 'Л',
        'KeyL' : 'Д',
        'Semicolon' : 'Ж',
        'Quote' : 'Э',
        'KeyZ' : 'Я',
        'KeyX' :'Ч',
        'KeyC' : 'С',
        'KeyV' : 'М',
        'KeyB' : 'И',
        'KeyN' : 'Т',
        'KeyM' : 'Ь',
        'Comma' :'Б',
        'Period' : 'Ю',
    }

    constructor(onKeyPress, ALPHABET){
        console.log('condtructor(onKeyPress)')
        this.init(onKeyPress);
        this.ALPHABET = ALPHABET;
    }

    init(onKeyPress){
        console.log('init(onKeyPress)')
        document.body.addEventListener('keydown', (event) => {
            let  letterOfKey = event.key.toUpperCase();
            if (this.ALPHABET.includes(letterOfKey)) onKeyPress(letterOfKey)
            else if (this.CODES[event.code]) onKeyPress(this.CODES[event.code]);
            console.log(event.key);
         //   onKeyPress(event.key);
        })
    }

   // document.body.addEventListener('keydown', (event) => {
//     area.innerHTML += `key ${event.key}, code = ${event.code}\n`;
//     console.log(`key ${event.key}, code = ${event.code}`)
// })



}