let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function graficarGato(){
    limpiarCanva();
    const alturaGato = 80;
    const anchoGato = 120;
    ctx.fillStyle = "#76C0EC";
    ctx.fillRect(canvas.width/2 - (anchoGato/2), canvas.height/2 - (alturaGato/2), anchoGato, alturaGato);
}