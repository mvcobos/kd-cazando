let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTO_GATO = 80;
const ANCHO_GATO = 120;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 60;

let gatoX = canvas.width/2 - ANCHO_GATO/2;
let gatoY = canvas.height/2 - ALTO_GATO/2;
let comidaX = canvas.width-ANCHO_COMIDA;
let comidaY = canvas.height-ALTO_COMIDA;
let puntaje = 0;
let tiempo = 10;
let intervaloTiempo;

function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function iniciarJuego() {
    gatoX = canvas.width / 2 - ANCHO_GATO / 2;
    gatoY = canvas.height / 2 - ALTO_GATO / 2;

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    intervaloTiempo = setInterval(restarTiempo, 1000); //1P: funcion 2P: tiempo en milisegundos
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
  actualizarPantalla();
}

function moverDerecha(){
  gatoX+=10;
  actualizarPantalla();
}

function moverArriba(){
  gatoY-=10;
  actualizarPantalla();
}

function moverAbajo(){
  gatoY+=10;
  actualizarPantalla();
}

function actualizarPantalla(){
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
        puntaje += 1;
        mostrarEnSpan("puntos", puntaje)
        aparecerComida();
        
        if(puntaje == 6){
          alert("GANADOR")
          clearInterval(intervaloTiempo);
        }
    }    
}

function restarTiempo(){
  tiempo -= 1;
  mostrarEnSpan("tiempo", tiempo);
  
  if(tiempo == 0){
    alert("GAME OVER")
    clearInterval(intervaloTiempo);
  }
}

function aparecerComida(){
  comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
  comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
  actualizarPantalla();
}

function reiniciar(){
    clearInterval(intervaloTiempo);  
    gatoX = canvas.width/2 - ANCHO_GATO/2;
    gatoY = canvas.height/2 - ALTO_GATO/2;
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    puntaje = 0;
    tiempo = 10;
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    limpiarCanva();
    iniciarJuego();
}