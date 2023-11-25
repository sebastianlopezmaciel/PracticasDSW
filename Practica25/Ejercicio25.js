
var valores = [true, 10, false, "codigo", "herramientas", 7];

var texto1 = valores[3];
var texto2 = valores[4];

if (texto1.length > texto2.length) {
    console.log(texto1 + " es mayor que " + texto2);
} else if (texto2.length > texto1.length) {
    console.log(texto2 + " es mayor que " + texto1);
} else {
    console.log("Ambos textos tienen la misma longitud.");
}




var resultadoTrue = valores[0] && valores[2];  // true AND false
var resultadoFalse = valores[0] || valores[2]; // true OR false

console.log("Resultado True:", resultadoTrue);
console.log("Resultado False:", resultadoFalse);


var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;


console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);












/*

var numero1; 
var numero2;
var suma, resta, multiplicacion, division;

numero1 = prompt ("Ingrese el primer numero:");
numero2 = prompt ("Ingrese el segundo numero");
suma = (parseInt(numero1) + parseInt(numero2));
resta = (parseInt(numero1) - parseInt(numero2));
multiplicacion = (parseInt(numero1) * parseInt(numero2));
division =(parseInt(numero1) / parseInt(numero2));

alert("el resultado de la suma : "+suma+" la resta es:  "+resta+" la multiplicacion es: "+multiplicacion+" la division es: "+division);
*/