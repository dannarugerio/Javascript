/* 
Funciones 

Las funciones son bloques de código reutilizables que realizan una tarea especifica. 

1. Función Declarada

Es la forma mas común de definir funciones. Se puede llamar a la función anteds de su definición debido al hoisting, es decir que se "elevan" en el contexto de ejecución. 

Sintaxis: 

function nombreFuncion() {
//Cuerpo de la función
}

Llamada: 

nombreFuncion();

*/
saludar(); 

function saludar() {
  console.log("Hola, nariz de bola");
}

/* 

2. Función expresada (Anónimas)

Este tipo de funciones se asignan a una variable. 
NO puede ser llamada antes de su definición. 

Sintaxis: 

const nombreConstante = function() {
  //Cuerpo de la funcion
}

Llamada: 

nombreConstante(); 

*/

const despedir = function() {
  console.log("Adiós, te voy a extrañar!");
}

despedir(); 

/* 

3. Funciones Flecha (Arrow Function)

Tienen una sintaxis más consisa, son útiles para ejecuciones cortas. Generalmente se asignan a una variable. 

Sintaxis: 

const nombreConstante = () => {
  //Cuerpo de la función
}

Llamada: 

nombreConstante(); 

*/

const mensaje = () => {
  console.log("Ya muero de hambre!");
}

mensaje(); 

/* 

Parámetros y Argumentos 

Las funciones pueden aceptar parámetros para recibir datos cuando son llamadas. 

Sintaxis: 

function nombreFuncion(parámetro1, parámetro2) {
  // Cuerpor de la funcion
}

Llamada: 

nombreFuncion(argumento1, argumento2); 

*/

function sumar(num1, num2) {
  console.log(`El resultado de la suma es: ${num1 + num2}`)
}

sumar(2, 3); 
sumar(245, 674); 
sumar(6, 23); 
sumar(46581254, 54635489);

function saludo(nombre) {
  console.log(`Hola ${nombre}! `)
}

saludo(`Esteban`);
saludo(`Yukio`);
saludo(`Ariel`);
saludo(`Colette`);


/* 

Parametros por defecto 

En las funciones podemos tener valores por defecto si no se proporcionan argumentos al llamar a la funcion. 

Sintaxis: 

function nombreFuncion(paramentro1 = valorDefault) {
  //Cuerpo de la funcion
}

Llamada: 

nombreFuncion(); //usa los valores por defecto
nombreFuncion(argumento1); // usa el valor del argumento

*/

const multiplicar = function(num1= 1, num2 = 2) {
  console.log(`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`)
}

multiplicar(); 
multiplicar(8, 5); 
multiplicar(10, 46); 
multiplicar();

/* Crea una funcion que de la Bienvenida a un usuario personalizando su nombre que muestre un mensaje de invitado si no se tiene el nombre del usuario. */

const bienvenida = (usuario = `invitado`) => {
  if(usuario == `invitado`) {
    console.log(`Registrate o continua como invitado!`)
  } else {
    console.log(`Bienvenido ${usuario}!`);
  }
}

bienvenida(); 
bienvenida(`Julio`);

/* 

Valor de Retorno 

Las funciones pueden devolver un valor utilizando la palabra "return". 

Sintaxis: 

function nombreFunction() {
 //Cuerpo de la funcion
 return valor; 
}

Llamada: 

const nombreConstante = nombreFuncion();

*/

function despedida() {
  return `Adios mundo cruel!`; 
}

const resultado = despedida(`Antonio`);
console.log(resultado);

/* 

Return Implícito 

Las funciones flecha no necesitan la palabra return, en su estructura más simple (una sola línea)

Sintaxis:

const nombreConstante = () => {valor}; 

*/

const restar = (num1, num2) => num1 - num2;
console.log(restar(10, 5));
const resultadoResta = restar(10, 5);
console.log(resultadoResta);