/* 

Juego Piedra, Papel o Tijera

  Crear un juego interactivo donde el usuario pueda jugar contra la computadora. 

  Reglas: 
  - Piedra vence a tijera
  - Tijera vence a papel
  - Papel venca a piedra
  - Si ambos eligen el mismo es empate. 

  Pasos para implementar: 

  - Definir las opciones del jugador. 
  - Generar una opción aleatoria para la computadora.
  - Comparar estas opciones y determinar ganador. 
  - Mostrar el resultado. 

  Estructuras a utilizar 

  - Variables
  - Condicionales 
  - Generación de un número aleatorio (Math.random)
  - Operadores lógicos y de comparación 
  - Concatenación de cadenas (strings)
  - Plantillas literales (template strings)
  - Comentarios. 

*/

// 1.- Variables - Opciones del jugador 
const opcionJugador = prompt("Para jugar, escribe piedra, papel o tijera"); //piedra, papel, tijera 

// 2.- Opción de la computadora 
const numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1 
let opcionComputadora; 

// 3.- Condicional - Asignamos opción según el número aleatorio.
if (numeroAleatorio < 0.33) {
  opcionComputadora = "piedra"; 
} else if (numeroAleatorio < 0.66) {
  opcionComputadora = "papel"; 
} else {
  opcionComputadora = "tijera"; 
}

// 4.- Mostrar las elecciones 
console.log("Piedra, Papel o Tijera"); 
console.log("Tu elección:" + opcionJugador); 
console.log("La compu eligió: "+ opcionComputadora); 
console.log("---------------------------------------------"); 

// 5.- Determinar el ganador a partir de condicionales
let resultado; 

if (opcionJugador === opcionComputadora) {
  resultado = `¡EMPATE! ambos eligieron ${opcionJugador} `; 
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera") {
  resultado = `¡GANASTE! piedra vence a tijera.`; 
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") {
  resultado = `¡GANASTE! papel vence a piedra.`; 
} else if (opcionJugador === "tijera" && opcionComputadora === "papel") {
  resultado = `¡GANASTE! tijera vence a papel.`; 
} else {
  resultado = "¡PERDISTE! La compu te ganó."; 
} 

// 6.- Mostramos resultado 
console.log(resultado); 
 