

// Definimos las de las imágenes y las respuestas correctas en este caso 10
let maravillas = ["bn.svg", "ga.svg", "ba.svg", "br.svg", "gn.svg","gr.svg","gv.svg","sr.svg","sv.svg","bv.svg"];
let correcta = [2,2,2,2,3,2,0,2,1,1,0];

// funcion de las opciones para cada pregunta
let opciones = [];

opciones.push(["Rojo", "Azul", "negro", "Verde"]);
opciones.push(["Verde", "Rojo", "Azul ", "negro"]);
opciones.push([" Verde", "Rojo", "Azul ", "negro"]);
opciones.push(["Verde", "Rojo ", "Azul", "negro"]);//
opciones.push(["Rojo ", "Verde", "Azul ", "negro"]);
opciones.push(["Verde", " Azul", "Rojo", "negro"]); 
opciones.push(["Rojo", "Azul ", " Verde", "negro"]);//
opciones.push(["negro", "Rojo", " Azul", "Verde"]);
opciones.push(["Azul", "Verde ", "Rojo", "negro"]);
opciones.push(["Verde", "Azul", "Rojo ", "negro"]);

let posActual = 0;
let cantidadAcertadas = 0;

// Funcion que inicia el juego
function comenzarJuegoo(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

// Funcion para avanzar la siguiente pregunta y opciones
function cargarMaravilla(){
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}
// Funcion que limpia la apariencia de las opciones
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

// Funcion para comprobar la respuesta elegida
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla,1000);
}

// Funcion para terminar el juego y mostrar resultados
function terminarJuego(){
    // todo lo que tenga el id pantalla de juego despliega un estilo nulo , nada.
    document.getElementById("pantalla-juego").style.display = "none";
        // todo lo que tenga el id pantalla final su estilo se despliega como bloque
    document.getElementById("pantalla-final").style.display = "block";
// toma  todo lo que tenga el id  numcorrectas y lo actualiza a la cantidad de acertadas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
// toma  todo lo que tenga el id  numincorrectas y lo actualiza a la cantidad de no acertadas
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}
// Funcion para volver al inicio
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}