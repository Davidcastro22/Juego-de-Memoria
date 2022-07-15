// Inicializacion de variables
let tarjetasDestapadas=0;
let tarjeta1= null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimientos=0;
let aciertos=0;
let temporizador=false;
let timerInical=30;
let timer=30;
let tiempoRegresivo=null;

// apuntando al documento html
let mostrarMovimientos= document.getElementById("movimientos");
let mostrarAciertos= document.getElementById("aciertos");
let MostrarTiempo=document.getElementById("time");


// numeros aleatorios
let numeros= [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// funccion "sort" ordena numeros de acuerdo a una funcion
// math es una funcion, regresa numeros aleatorios positivos
// se coloca parametro "-0.5" para que regrese nuemros negativos
numeros= numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

// funciones

// tiempo regresivo
function contarTiempo(){
  tiempoRegresivo=  setInterval(() => {
        timer--;
        MostrarTiempo.innerHTML=`Tiempo: ${timer}segundos`;
        // detener tiempo y detener juego
        if(timer==0){
            clearInterval(tiempoRegresivo);
            endGame();
        }
    },1000);
}
function endGame(){
    for(let i=0; i<=15; i++){
        let finJuego=document.getElementById(i);
        finJuego.innerHTML=numeros[i];
        finJuego.disabled=true;
    }
}



// funcion principal
// al precionar un boton se activa esta funcion que tiene vinculado en el html
function destapar(id){

   if(temporizador== false){
    contarTiempo();
    temporizador=true;
   }
   tarjetasDestapadas++;

   if(tarjetasDestapadas==1){
    // mostrar el primer tarjeta
    tarjeta1=document.getElementById(id);
    // mostar valor de botones en el html
    primerResultado=numeros[id];
    tarjeta1.innerHTML= primerResultado;
    // desabilitar el primer boton presionado
    tarjeta1.disabled=true;
   }else if(tarjetasDestapadas==2){
// mostrar segunda tarjeta
tarjeta2=document.getElementById(id);
segundoResultado=numeros[id];
tarjeta2.innerHTML= segundoResultado;
//    desabilitar segundo boton
tarjeta2.disabled=true;
// aumentar movimientos
movimientos++;
mostrarMovimientos.innerHTML=`Movimientos:${movimientos}`;

// consultar resultados iguales
if(primerResultado==segundoResultado){
    // encerrar contador tarjetas destapadas
    tarjetasDestapadas=0;
    // aumentar aciertos
    aciertos++;
    mostrarAciertos.innerHTML=`Aciertos${aciertos}`;

    if(aciertos==8){
        clearInterval(tiempoRegresivo);
        mostrarAciertos.innerHTML=`Aciertos Completados`
        MostrarTiempo.innerHTML= `Fantastico solo te domoraste ${timerInical-timer}segundos`
        mostrarMovimientos.innerHTML= `Movimientos totales: ${movimientos}`
    }
}

    else{
    // mostrar valores y volve a tapar
    setTimeout(()=>{
        tarjeta1.innerHTML='';
        tarjeta2.innerHTML='';
        tarjeta1.disabled=false;
        tarjeta2.disabled=false;
        tarjetasDestapadas=0;
    },800)
}
   }
}


