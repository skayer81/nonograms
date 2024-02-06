export class KeyboardHandler{
    CODES = {
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
        this.init(onKeyPress);
        this.ALPHABET = ALPHABET;
    }

    init(onKeyPress){
        document.body.addEventListener('keydown', (event) => {
            let  letterOfKey = event.key.toUpperCase();
            if (this.ALPHABET.includes(letterOfKey)) onKeyPress(letterOfKey)
            else if (this.CODES[event.code]) onKeyPress(this.CODES[event.code]);
        })
    }
}