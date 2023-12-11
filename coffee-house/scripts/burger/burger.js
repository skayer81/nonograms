// export function initBurger(){
//     const burgerButton = document.getElementById('burgerButton');
//     const burgerMenu= document.getElementById('burgerMenu');
//    // document.querySelector('.burger-button__span1').classList.add('animation')
//     burgerButton.addEventListener('click', ()=>{
//         burgerMenu.classList.toggle('active');
//         burgerButton.classList.toggle('burger-open')
//     })
//     burgerMenu.addEventListener('click', ()=>{
//         burgerMenu.classList.toggle('active');
//         burgerButton.classList.toggle('burger-open')
//     })
// }

export class BurgerMenu{
    constructor(){
        this._burgerButton = document.getElementById('burgerButton');
        this._burgerMenu= document.getElementById('burgerMenu');
        this._listenerInit();
    }

    _listenerInit(){
        this._burgerButton.addEventListener('click', ()=>{
            this._burgerMenu.classList.toggle('active');
            this._burgerButton.classList.toggle('burger-open')
        })
        window.addEventListener('resize', (event) =>{
            if (window.innerWidth < 768) this.closeBurger()
            // console.log('scrollWidth', document.body.scrollWidth, 
            //     'clientWidth', document.body.clientWidth, 'offsetWidth', document.body.offsetWidth,
            //     'innerHeight', 
            //     window.innerWidth
            //     );
            console.log(    'clientWidth', document.body.clientWidth, 'offsetWidth', document.body.offsetWidth,
                 'innerHeight', 
                 window.innerWidth
                 );
        })//document.scrollHeight равен document.offsetHeight
//         <sсript type="text/javascript">
//   windоw.addEventListener('resize',(e) => {
//     cоnst width= document.body.clientWidth;
//     cоnst getInput = document.getElementById("text");
//     gеtInput.value = width;  
// });
    }

    closeBurger(){
        this._burgerMenu.classList.remove('active');
        this._burgerButton.classList.remove('burger-open')
    }


}