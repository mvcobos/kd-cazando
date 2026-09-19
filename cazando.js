let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let context = canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
const ALTO_GATO = 80;
const ANCHO_GATO = 120;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 60;

function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function iniciarJuego() {
  gatoX = canvas.width/2 - ANCHO_GATO/2;
  gatoY = canvas.height/2 - ALTO_GATO/2;
  comidaX = canvas.width-ANCHO_COMIDA;
  comidaY = canvas.height-ALTO_COMIDA;

  graficarGato();
  graficarComida();
}

function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#76C0EC");
}

function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#FF95A5");
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto)
}

function moverIzquierda(){
    gatoX-=10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX+=10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY-=10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY+=10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if(comidaX + ANCHO_COMIDA > gatoX
        && comidaX < gatoX + ANCHO_GATO
        && comidaY + ALTO_COMIDA > gatoY 
        && comidaY < gatoY + ALTO_GATO
    ){
        alert("ATRAPADO!")
    }     
}