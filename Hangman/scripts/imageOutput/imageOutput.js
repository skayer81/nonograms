import { CreateFormComponent } from "../createComponent/createComponent.js";

export class ImageOutput extends CreateFormComponent{
  constructor(){
        super();
        this.isInit = false;
        this.init();
  }

  startNewGame(){
    this._context.lineWidth = 400;
    this._context.strokeStyle = 'white';
    this.drawLine(300, 460, 300, 95);
    this._hasHead = false;
  }

  win(){
    if (this._hasHead){
      this._context.strokeStyle = 'red';
      this.drawEllipse(360, 180, 10, 15, Math.PI, Math.PI, 2*Math.PI)
    }
  }

  lose(){
    this._context.lineWidth = 5;
    this._context.clearRect(330, 120, 60, 65);
    this._context.clearRect(320, 145, 80, 30);
    this._context.clearRect(340, 180, 40, 10);
    this.drawLine(340, 125, 350, 135);
    this.drawLine(340, 135, 350, 125);
    this.drawLine(370, 125, 380, 135);
    this.drawLine(370, 135, 380, 125);
    this.drawCircle(360, 190, 35,  Math.PI+0.5,  Math.PI*2-0.5, false)
  }

  init(){
    this.container = this.createFormComponent(0, 'canvas', ['picture-container'],{'width':'500','height':'500' });
    this._context = this.container.getContext("2d");
    this._context.lineWidth = 10;
    this._context.strokeStyle = 'black';
    this._context.clearRect(0, 0, 500, 500);
    this.drawLine(20, 480, 480, 480);
    this.drawLine(80, 480, 80, 40);
    this.drawLine(75, 40, 360, 40);
    this.drawLine(360, 40, 360, 100);
    this.drawLine(80, 100, 140, 40);
  }

  drawLine(startX, startY, finishX, finishY) {
    let  xPos = startX;
    let  yPos = startY;
    let  xSpeed = Math.min((finishX - startX) / 50, 10);
    let  ySpeed =  Math.min((finishY - startY) / 50, 10);
    const draw = () => {
      this._context.beginPath();
      this._context.moveTo(startX, startY);
      this._context.lineTo(xPos, yPos);
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

  drawCircle(xPosition, yPosition, radius,startAngle, endAngle){
    let currentAngle = startAngle;
    const animationDuration = 1000;
    const framesPerSecond = 60;
    const frameDuration = 1000 / framesPerSecond;
    const frameIncrement = ((endAngle - startAngle) / animationDuration) * frameDuration;
    const draw = () => {
      this._context.beginPath();
      this._context.arc(xPosition, yPosition, radius, startAngle, currentAngle);
      this._context.stroke();
      currentAngle += frameIncrement;
      if (currentAngle < endAngle) {
        requestAnimationFrame(draw);
      }
    }
    draw()
  }

  drawEllipse(x, y, r1, r2, rotation, startAngle, endAngle){
    let currentAngle = startAngle;
    const animationDuration = 2000; // Длительность анимации в миллисекундах
    const framesPerSecond = 60;
    const frameDuration = 1000 / framesPerSecond;
    const frameIncrement = ((endAngle - startAngle) / animationDuration) * frameDuration;
    const draw = () => {
      this._context.beginPath();
      this._context.ellipse(x, y, r1, r2, rotation, startAngle, currentAngle);
      this._context.stroke();
      currentAngle += frameIncrement;
      if (currentAngle < endAngle) {
        requestAnimationFrame(draw);
      }
    }
    draw();
  }

  outputPartOfImage(index){
    this._context.lineWidth = 5;
    this._context.strokeStyle = 'black';
    if (index === 0) this.draw0();
    if (index === 1) this.draw1();
    if (index === 2) this.draw2();
    if (index === 3) this.draw3();
    if (index === 4) this.draw4();
    if (index === 5) this.draw5();
  }

  draw0(){
    this._hasHead = true;
    this.drawCircle(360, 150, 50, 0,  2 * Math.PI+0.1);
    this.drawCircle(360, 150, 35, 0, Math.PI)
    this.drawCircle(345, 130, 5, 0, Math.PI * 2);
    this.drawCircle(375, 130, 5, 0, Math.PI * 2);
  }

  draw1(){
    this.drawEllipse(360, 280, 50, 75, 0, 0, 2 * Math.PI + 1)
  }

  draw2(){
    this.drawLine(400, 230, 450, 100);
  }

  draw3(){
    this.drawLine(320, 230, 270, 100);
  }

  draw4(){
    this.drawLine(400, 320, 450, 450);
  }

  draw5(){
    this.drawLine(320, 320, 270, 450);
  }
}