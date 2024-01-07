//import { CreateBaseComponent } from "../createComponent/createComponent.js";
import { CreateFormComponent } from "../createComponent/createComponent.js";

export class ImageOutput extends CreateFormComponent{

    test = ['голова','туловище','левая рука','правая рука','правая нога','левая нога']

    constructor(){
        super();
        this.init();

    }

    init(){
        this._canvas = this.createFormComponent(document.body, 'canvas', ['pictureContainer'],{'width':'500','height':'500' });
    //    this._canvas.style.width = "500px";
     //   this._canvas.style.height = "500px";
       // var canvas = document.getElementById("canvas");
        this._context = this._canvas.getContext("2d");
        this._context.lineWidth = 10;
        this._context.strokeStyle = 'black';
              //let lineWidth = 10;
        //let lineColor = "black";
        this.startNewGame();
     //    this.draw0();
       //  this.lose()
        // this.draw1();
        // this.draw2();
        // this.draw3();
        // this.draw4();
        // this.draw5();
    }


    // var canvas = document.getElementById("canvas");
    // var context = canvas.getContext("2d");
    // ctx.fillStyle = "rgba(255, 255, 255, 0)";
    
    // var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext("2d");
    // var xPos = 20;
    // var yPos = 480;
 
    // var animationSpeed = 10;
    
    // let line1Length = 480
    
    //function draw(startX + animationSpeed , StartY + animationSpeed, finishX, finishY)
    
      drawLine(startX, startY, finishX, finishY) {
        //let lineWidth = 10;
        //let lineColor = "black";
        let  xPos = startX;
        let  yPos = startY;
        let  xSpeed = Math.min((finishX - startX) / 50, 10);
        let  ySpeed =  Math.min((finishY - startY) / 50, 10);
    
        const draw = () => {
          //  console.log('рисуем',startX, startY ,xPos, yPos)
            // console.log('рисуем2',xSpeed, ySpeed ,finishX, finishY)
            this._context.beginPath();
            this._context.moveTo(startX, startY);
            this._context.lineTo(xPos, yPos);
           // this._context.lineWidth = lineWidth;
           // this._context.strokeStyle = lineColor;
            this._context.stroke();
            let flagOfFinish = (startX < finishX ? xPos > finishX : xPos <= finishX) &&
            (startY < finishY ? yPos > finishY : yPos <= finishY)
            if ( !flagOfFinish) {
    
                requestAnimationFrame(draw);
            
                xPos += xSpeed;
                yPos += ySpeed;
            }       
            else return true;
    
        }
        requestAnimationFrame(draw);
    
    
    }
    
    // var xPos = 20;
    // var yPos = 480;
    
     startNewGame(){
        this._context.clearRect(0, 0, 500, 500);
    
        // let promise = new Promise((resolve, reject) => {
        //     drawLine(20, 480, 480, 480);
        //   });
        this._context.lineWidth = 10;
        
           this.drawLine(20, 480, 480, 480); // будет ждать, пока промис не выполнится (*)

           this.drawLine(80, 480, 80, 40)// drawLine(40, 480, 40, 40);
    
           this.drawLine(80, 40, 360, 40)
           this.drawLine(360, 40, 360, 100)
    
           this.drawLine(80, 100, 140, 40)

    }
    
     
    outputPartOfImage(index){
        if (index === 0) this.draw0();
        if (index === 1) this.draw1();
        if (index === 2) this.draw2();
        if (index === 3) this.draw3();
        if (index === 4) this.draw4();
        if (index === 5) this.draw5();
      //  this.draw2()

     //   this.container.innerHTML = this.container.innerHTML + ' + ' + this.test[index]

    }

    drawCircle(xPosition, yPosition, radius,startAngle, endAngle){
        //let startAngle = 0;
        //const endAngle = 2 * Math.PI + 10;
//         var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");
// ctx.fillStyle = "rgba(255, 255, 255, 0)";

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var xPos = 20;
// var yPos = 480;
// var lineWidth = 10;
// var lineColor = "black";
        let currentAngle = startAngle;
        const animationDuration = 1000; // Длительность анимации в миллисекундах
        const framesPerSecond = 60;
        const frameDuration = 1000 / framesPerSecond;
        const frameIncrement = ((endAngle - startAngle) / animationDuration) * frameDuration;
  
        // Функция рисования круга
        const draw = () => {
       //   context.clearRect(0, 0, canvas.width, canvas.height);
  
       this._context.beginPath();
       this._context.arc(xPosition, yPosition, radius, startAngle, currentAngle);
       
       //this._context.strokeStyle = 'black';
       this._context.stroke();
  
          currentAngle += frameIncrement;
  
          if (currentAngle < endAngle) {
            requestAnimationFrame(draw);
          }
         
        }
        draw() 
      }
  
        // Запуск анимации
        draw0(){
            this._context.lineWidth = 5;
        this.drawCircle(360, 150, 50, 0,  2 * Math.PI+0.1);
        this.drawCircle(360, 150, 35, 0, Math.PI)
        this.drawCircle(345, 130, 5, 0, Math.PI * 2); // Левый глаз
        //       ctx.moveTo(95, 65);
        this.drawCircle(375, 130, 5, 0, Math.PI * 2);
  
        }

//         const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Рисование эллипса
// ctx.beginPath();
// ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
// ctx.stroke();
       drawEllipse(x, y, r1, r2, rotation, startAngle, endAngle){
        // const canvas = document.getElementById("canvas");
        // const context = canvas.getContext("2d");
        let currentAngle = startAngle;
        const animationDuration = 2000; // Длительность анимации в миллисекундах
        const framesPerSecond = 60;
        const frameDuration = 1000 / framesPerSecond;
        const frameIncrement = ((endAngle - startAngle) / animationDuration) * frameDuration;

        const draw = () => {
            //   context.clearRect(0, 0, canvas.width, canvas.height);
       
            this._context.beginPath();
             //  context.arc(xPosition, yPosition, radius, startAngle, currentAngle);
             this._context.ellipse(x, y, r1, r2, 0, startAngle, currentAngle);
           //  this._context.lineWidth = 5;
            // this._context.strokeStyle = 'black';
             this._context.stroke();
       
               currentAngle += frameIncrement;
       
               if (currentAngle < endAngle) {
                 requestAnimationFrame(draw);
               }
              
             }
             draw() 
           }


       

        draw1(){
            this._context.lineWidth = 5;

            this.drawEllipse(360, 280, 50, 75, 0, 0, 2 * Math.PI + 1)

// Рисование эллипса
                // ctx.beginPath();
                // ctx.ellipse(360, 320, 50, 75, 0, 0, 2 * Math.PI);
                // ctx.stroke();
            // this.drawCircle(360, 190, 50, 0,  2 * Math.PI + 10);
            // this.drawCircle(360, 190, 35, 0, Math.PI)
            // this.drawCircle(345, 180, 5, 0, Math.PI * 2); // Левый глаз
            // //       ctx.moveTo(95, 65);
            // this.drawCircle(375, 180, 5, 0, Math.PI * 2);
      
            }

            draw2(){
                this._context.lineWidth = 5;
                this.drawLine(400, 230, 450, 100);
            }
            draw3(){
                this._context.lineWidth = 5;
                this.drawLine(320, 230, 270, 100);
            }
            draw4(){
                this._context.lineWidth = 5;
                this.drawLine(400, 320, 450, 450);
            }
            draw5(){
                this._context.lineWidth = 5;
                 this.drawLine(320, 320, 270, 450);
            }
    





    win(){
        
    }

    lose(){
        this._context.lineWidth = 5;
      //  this._context.clearRect(330, 120, 70, 140)

     //this._context.fillStyle = "red";
     this._context.clearRect(330, 120, 60, 65);
     //this._context.fillStyle = "blue";
     this._context.clearRect(320, 145, 80, 30);
     //this._context.fillStyle = "green";
     this._context.clearRect(340, 180, 40, 10);

     this.drawLine(340, 125, 350, 135);
     this.drawLine(340, 135, 350, 125);

     this.drawLine(370, 125, 380, 135);
     this.drawLine(370, 135, 380, 125);

     this.drawCircle(360, 190, 35,  Math.PI+0.5,  Math.PI*2-0.5, false)
     

     console.log('удалили')
      //  this.drawCircle(345, 130, 5, 0, Math.PI * 2); // Левый глаз
        //       ctx.moveTo(95, 65);
      //  this.drawCircle(375, 130, 5, 0, Math.PI * 2);
    }


}