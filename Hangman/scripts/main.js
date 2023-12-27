import {CreateBaseComponent}  from './createComponent/createComponent.js'
import { ApplicationManagement } from './applicationManagement/applicationManagement.js'

const applicationManagement = new ApplicationManagement();

window.onload = function() 
{ 
  //Получить элемент холста
  var canvas = document.getElementById("square");   
  var context = canvas.getContext("2d");  //Получить 2D контекст
  context.fillStyle = "#0f0";             //Цвет заливки зелёный
  context.fillRect(0, 0, 20, 20);         //Залить квадрат
  canvas = document.getElementById("circle"); //Новый элемент холста
  context = canvas.getContext("2d");          //Получить его контекст
  context.fillStyle = "#f00";                 //Цвет заливки красный
  context.beginPath();                        //Начать рисование
  //Добавить в рисунок окружность с радиусом 10 
  //и с центром в точке (15,15)
  context.arc(15, 15, 10, 0, 2*Math.PI, true);
  context.fill( );                            //Залить фигуру
}

//const creator = new CreateBaseComponent();



