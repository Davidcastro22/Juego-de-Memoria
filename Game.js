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

// sonidos


// apuntando al documento html
let mostrarMovimientos= document.getElementById("movimientos");
let mostrarAciertos= document.getElementById("aciertos");
let MostrarTiempo=document.getElementById("time");
let fallaste=document.getElementById("fallaste");
let jugarDeNuevo=document.getElementById("reintentar");
// numeros aleatorios
let numeros= [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
// funccion "sort" ordena numeros de acuerdo a una funcion
// math es una funcion, regresa numeros aleatorios positivos
// se coloca parametro "-0.5" para que regrese nuemros negativos
numeros= numeros.sort(()=>{return Math.random()-0.5});

// funciones




// tiempo regresivo
function contarTiempo(){
  tiempoRegresivo=  setInterval(() => {
        timer--;
        MostrarTiempo.innerHTML=`Tiempo: ${timer} segundos`;
        if(timer<=10){
            MostrarTiempo.style.color="red";
           }
        // detener tiempo y detener juego
        if(timer==0){
            clearInterval(tiempoRegresivo);
            endGame();
            MostrarTiempo.innerHTML=`Fallaste`;
            MostrarTiempo.style.color="red";
            MostrarTiempo.style.fontSize="20px"
            fallaste.style.display="grid";
            jugarDeNuevo.style.display="grid"
        }
    },1000);
}
function endGame(){
    for(let i=0; i<=15; i++){
        let finJuego=document.getElementById(i);
        finJuego.innerHTML=`<img src="./estilos/img/${numeros[i]}.png" alt="">`;;
        finJuego.disabled=true;
    }
}

// iniciar juego otra vez





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
    tarjeta1.innerHTML= `<img src="./estilos/img/${primerResultado}.png" alt="">`;
    // desabilitar el primer boton presionado
    tarjeta1.disabled=true;
   }else if(tarjetasDestapadas==2){
// mostrar segunda tarjeta
tarjeta2=document.getElementById(id);
segundoResultado=numeros[id];
tarjeta2.innerHTML= `<img src="./estilos/img/${segundoResultado}.png" alt="">`;
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
    mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`;

    if(aciertos==8){
        clearInterval(tiempoRegresivo);
        mostrarAciertos.innerHTML=`Aciertos Completados`;
        mostrarAciertos.style=color="yellow";
        MostrarTiempo.innerHTML= `Fantastico solo domoraste ${timerInical-timer}segundos`;
        MostrarTiempo.style.color="yellow";
        mostrarMovimientos.innerHTML= `Movimientos totales: ${movimientos}`;
        mostrarMovimientos.style.color="yellow";
        jugarDeNuevo.innerHTML='Jugar de nuevo';
        jugarDeNuevo.style.display="grid";
        fallaste.innerHTML="Felicidades";
        fallaste.style.color="yellow";
        fallaste.style.display="grid";
    }
}else{
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




