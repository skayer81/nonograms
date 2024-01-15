import { ApplicationManagement } from './applicationManagement/applicationManagement.js'

const applicationManagement = new ApplicationManagement();





// function getPath(){
//     return './test.js'
// }

// import(getPath())
//     .then(obj => {
//         obj.test()})

// клава.addEventListener('click', () => {обработчик(аргумент)})


  //.catch(err => <ошибка загрузки, например если нет такого модуля>)

// // window.onload = function() 
// // { 
// //   //Получить элемент холста
// //   var canvas = document.getElementById("square");   
// //   var context = canvas.getContext("2d");  //Получить 2D контекст
// //   context.fillStyle = "#0f0";             //Цвет заливки зелёный
// //   context.fillRect(0, 0, 20, 20);         //Залить квадрат
// //   canvas = document.getElementById("circle"); //Новый элемент холста
// //   context = canvas.getContext("2d");          //Получить его контекст
// //   context.fillStyle = "#f00";                 //Цвет заливки красный
// //   context.beginPath();                        //Начать рисование
// //   //Добавить в рисунок окружность с радиусом 10 
// //   //и с центром в точке (15,15)
// //   context.arc(15, 15, 10, 0, 2*Math.PI, true);
// //   context.fill( );                            //Залить фигуру
// // }

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");
// // ctx.fillStyle = "rgba(255, 255, 255, 0)";

// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // var xPos = 20;
// // var yPos = 480;
// var lineWidth = 10;
// var lineColor = "black";
// // var animationSpeed = 10;

// // let line1Length = 480

// //function draw(startX + animationSpeed , StartY + animationSpeed, finishX, finishY)

//  async function drawLine(startX, startY, finishX, finishY) {
//     let  xPos = startX;
//     let  yPos = startY;
//     let  xSpeed = Math.min((finishX - startX) / 50, 10);
//     let  ySpeed =  Math.min((finishY - startY) / 50, 10);

//     function draw(){
//         console.log('рисуем',startX, startY ,xPos, yPos)
//         // console.log('рисуем2',xSpeed, ySpeed ,finishX, finishY)
//         context.beginPath();
//         context.moveTo(startX, startY);
//         context.lineTo(xPos, yPos);
//         context.lineWidth = lineWidth;
//         context.strokeStyle = lineColor;
//         context.stroke();
//         let flagOfFinish = (startX < finishX ? xPos > finishX : xPos <= finishX) &&
//         (startY < finishY ? yPos > finishY : yPos <= finishY)
//         if ( !flagOfFinish) {

//             requestAnimationFrame(draw);
        
//             xPos += xSpeed;
//             yPos += ySpeed;
//         }       
//         else return true;

//     }
//     requestAnimationFrame(draw);


// }

// // var xPos = 20;
// // var yPos = 480;

//  async function start(){


//     // let promise = new Promise((resolve, reject) => {
//     //     drawLine(20, 480, 480, 480);
//     //   });
    
//       let result = await drawLine(20, 480, 480, 480); // будет ждать, пока промис не выполнится (*)
    
//     //   alert(result); // "готово!"
//     // }
//     //  console.log('первая линия')
//    // let 
//     // let q =  await drawLine(20, 480, 480, 480);
//     //console.log(promise)

//    // result.then(await 
//         drawLine(80, 480, 80, 40)// drawLine(40, 480, 40, 40);

//         drawLine(80, 40, 360, 40)
//         drawLine(360, 40, 360, 100)

//         drawLine(80, 100, 140, 40)
//    //     drawLine(80, 40, 80, 400)
//     // console.log('вторая линия')
//     // let e = await drawLine(40, 480, 40, 40);
//    // drawLine(20, 480, 480, 480) // drawLine(40, 480, 40, 40);
// }

//  start()


//       // Получаем контекст рисования
//      // const canvas = document.getElementById('myCanvas');
//   //    const context = canvas.getContext('2d');









//       // Начальные параметры анимации
//     //   function drawCircle(xPosition, yPosition, radius,startAngle, endAngle){
//     //   //let startAngle = 0;
//     //   //const endAngle = 2 * Math.PI + 10;
//     //   let currentAngle = startAngle;
//     //   const animationDuration = 2000; // Длительность анимации в миллисекундах
//     //   const framesPerSecond = 60;
//     //   const frameDuration = 1000 / framesPerSecond;
//     //   const frameIncrement = ((endAngle - startAngle) / animationDuration) * frameDuration;

//     //   // Функция рисования круга
//     //   function draw1() {
//     //  //   context.clearRect(0, 0, canvas.width, canvas.height);

//     //     context.beginPath();
//     //     context.arc(xPosition, yPosition, radius, startAngle, currentAngle);
//     //     context.lineWidth = 5;
//     //     context.strokeStyle = 'black';
//     //     context.stroke();

//     //     currentAngle += frameIncrement;

//     //     if (currentAngle < endAngle) {
//     //       requestAnimationFrame(draw1);
//     //     }
       
//     //   }
//     //   draw1() 
//     // }

//     //   // Запуск анимации
//     //   drawCircle(360, 190, 50, 0,  2 * Math.PI + 10);
//     //   drawCircle(360, 190, 35, 0, Math.PI)
//     //   drawCircle(345, 180, 5, 0, Math.PI * 2); // Левый глаз
//     //   //       ctx.moveTo(95, 65);
//     //   drawCircle(375, 180, 5, 0, Math.PI * 2);


//       // function draw() {
// //     var canvas = document.getElementById("canvas");
// //     if (canvas.getContext) {
// //       var ctx = canvas.getContext("2d");
  
// //       ctx.beginPath();
// //       ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
// //       ctx.moveTo(110, 75);
// //       ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
// //       ctx.moveTo(65, 65);
// //       ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
// //       ctx.moveTo(95, 65);
// //       ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз
// //       ctx.stroke();
// //     }
// //   }

// // draw();  




// // console.log('первая линия')
// //  drawLine(20, 480, 480, 480);
// // // console.log('вторая линия')
// //  drawLine(40, 480, 40, 40);



// // var xPos = 0;
// // var yPos = 0;
// // var lineWidth = 10;
// // var lineColor = "blue";
// // var animationSpeed = 2;

// // function drawLine() {
// //   ctx.beginPath();
// //   ctx.moveTo(0, 0);
// //   ctx.lineTo(xPos, yPos);
// //   ctx.lineWidth = lineWidth;
// //   ctx.strokeStyle = lineColor;
// //   ctx.stroke();
  
// //   xPos += animationSpeed;
// //   yPos += animationSpeed;
  
// //   if (xPos < canvas.width && yPos < canvas.height) {
// //     requestAnimationFrame(drawLine);
// //   }
// // }


// // function draw() {
// //     var canvas = document.getElementById("canvas");
// //     if (canvas.getContext) {
// //       var ctx = canvas.getContext("2d");
  
// //       ctx.beginPath();
// //       ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
// //       ctx.moveTo(110, 75);
// //       ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
// //       ctx.moveTo(65, 65);
// //       ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
// //       ctx.moveTo(95, 65);
// //       ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз
// //       ctx.stroke();
// //     }
// //   }

// // draw();  


// // var raf;

// // var ball = {
// //   x: 20,
// //   y: 480,
// //   vx: 3,
// //   vy: 3,
// //   radius: 5,
// //   color: "black",
// //   draw: function () {
// //     ctx.beginPath();
// //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
// //     ctx.closePath();
// //     ctx.fillStyle = this.color;
// //     ctx.fill();
// //   },
// // };

// // function draw1() {
    
//    // ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   let xEnd = 480;
// //   if (ball.x < xEnd){
// //     ball.draw();
// //     ball.x += ball.vx;
// //   }
// //   console.log(ball.x)
// //   ball.draw();
// //   ball.x += ball.vx;
// //   ball.y += ball.vy;

// //   if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
// //     ball.vy = -ball.vy;
// //   }
// //   if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
// //     ball.vx = -ball.vx;
// //   }
  
//   // window.requestAnimationFrame(draw1);

// //}

// // canvas.addEventListener("mouseover", function (e) {
// //   raf = window.requestAnimationFrame(draw);
// // });

// // canvas.addEventListener("mouseout", function (e) {
// //   window.cancelAnimationFrame(raf);
// // });
// // window.requestAnimationFrame(draw1);
// // for (let i = 1; i < 100; i++){
// //    draw();
// // }

// //ball.draw();
//const area = document.getElementById('area')

// document.body.addEventListener('keydown', (event) => {
//     area.innerHTML += `key ${event.key}, code = ${event.code}\n`;
//     console.log(`key ${event.key}, code = ${event.code}`)
// })
