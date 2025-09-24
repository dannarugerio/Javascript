/* 

Condicionales 

Son estructuras de control que permiten ejecutar diferentes bloques de código según una condición (verdadera o falsa). 

1. if 
Evalúa una condición y si es verdadera, ejecuta el bloque de código dentro de sus llaves 
Sintaxis:
    if (condicion) {
    //bloque o código que se ejecuta 
    }

*/

let edad = 22; 
if (edad >= 22) {
  alert("Eres mayor de edad, date")
} 

/* 

else 
  Permite ejecutar un bloque de código si la condición es falsa. 
Sintaxis: 
    if (condicion) {
    //código que se ejecuta si la condición es verdadera.
    }
    else {
      //código que se ejecuta si la condición es falsa
      }

*/

let hora = 10; 
if (hora<12) {
  console.log("Buenos dias, solecito!")
}
else {
  console.log("Buenos tardes chifurimpulo!");
}

/* 

3. else if 

Nos va a permitir tener más de una condición a ser evaluada, esta evaluacióon es en secuencia, si una condicion es verdadera se eejcuta su bloque de código. 
Sintaxis: 
    if (condición1) {
    //código que se ejecuta si es verdadera la condición
    } else if (condicion 2) {
    //código que se ejecuta si la anterior es falsa y esta condición es verdadera.  
    } else {
      //código que se ejecuta si ninguna de las anteriores es verdadera. 
      }

*/ 

let calificación =1; 
if (calificación >= 9) {
  console.log("Eres un exelente programador"); 
} else if (calificación >= 7) {
  console.log("Ahí la llevas, ya casi te sale"); 
} else if (calificación >= 5) {
  console.log("Echale más ganitas o nos veremos en el extra"); 
} else {
  console.log("Te veo en el extra");
} 