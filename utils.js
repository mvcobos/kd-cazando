
function generarAleatorio(min, max){
    let random = Math.random();//0-1
    // EJ: max es 600, min es 5
    let numero = random * (max-min);// 0-595
    let numeroEntero = Math.ceil(numero);
    numeroEntero = numeroEntero + min; //5-600
    return numeroEntero;
}

function mostrarEnSpan(idSpan, valor){
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}