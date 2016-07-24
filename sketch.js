//2016 07 23
// funciona con p5.js
//Lienzo verde con un elipse
//la elipse sigue al mouse

//apuntes de color
// por defecto, funciona con RGB y 8bits
// 8 bits implica los valores de color entre 0 y 255
//podemos escribir de 4 formas un color
//1-> grayscale
//3-> RGB
//2 -> grayscale + alpha (opacidad)
//4 -> RGB + Alpha


//variables
//var (x);
var diametro;
diametro = 100

//setup()corre una vez al principio
function setup() {

  var X = 10

  //creamos un lienzo
  //createCanvas(dimensionhorizonta, dimensiónvertical);
  createCanvas(windowWidth, windowHeight);


  //pintar el fondo verde
  //background(color);
  // tiene 4 números, por ende tiene RGB + opacidad (Alpha)
  background(0, 255, 190, 255);


  //frameRate (x) x = cuantos cuadros por segundo se dispara Draw.
  //frameRate(20)

}

//draw() corre después de setup
//draw() se ejecuta 60 veces por segundo máximo



function draw() {


  //background(0, 255, 190, 255);

  myEllipse()

  myTriangle()

  muchasElipses()


  //aumentar el diametro en 1:
  //diametro = diametro + 1;
  //manera corta de hacerlo es diametro++
  // o puede ser diametro += 1

  //console.log(x) imprime en la consola el valor de X


  //variales globales o locales


}

//declarar estiloVictoriano
function estiloVictoriano() {

  //definir el ancho de la figura
  //strokeWeight(px);
  //noStroke();
  strokeWeight(5);

  //cambiar el color del borde
  //stroke(color);
  stroke(0, 190, 255, 200);

  //Color del relleno
  //fill(color);
  //noFill();
  fill(190, 0, 190);


}


function estiloPersa() {

  //definir el ancho de la figura
  //strokeWeight(px);
  //noStroke();
  strokeWeight(40);

  //cambiar el color del borde
  //stroke(color);
  stroke(120, 100, 200, 50);

  //Color del relleno
  //fill(color);
  //noFill();
  fill(100, 100, 190, 200);


}

function myEllipse() {

  estiloPersa()

  //definir el ancho de la figura
  //strokeWeight(px);
  //noStroke();
  ellipse(mouseX, mouseY, 100, 100);


}

function myTriangle() {

  estiloVictoriano();

  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(0, 0, 0, height, mouseX, mouseY);


}


//Función para demostrar iteración
function muchasElipses() {
 
 //iteración
 //for(inicio;condicion;refresco) {}
 
 for (var i=0; i< 1000; i++){

  noStroke();

  fill(random(255), random(255), random(255), random(255));

  //elipse se dibuja en una posición aleatoria del canvas
  ellipse(random(width), random(height), random(100), random(50));
 }
}