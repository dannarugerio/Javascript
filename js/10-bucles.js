/* 

Bucles 

Son estructuras de control que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición específica. 

Las más comunes en JS son for, while y do ___ while. 

  1. Bucle for 
  Se utilza cuando sabemos cuantas veces queremos repetir un bloque de código.La sintaxis es:

    for (inicialización; condición; imcremento) {
      //el código que se va a repetir su ejecución 
    }
  
  inicialización -> variable con un valor inicial 
  condición -> se evalua una expresión si es true se ejecuta el bucle. 
  incremeto -> aumenta el valor de la variable en cada iteración. 

*/

for (let i = 0; i < 10; i++) {
  console.log("Repetición " + i + ": Oye Cucu, papá se fue!");
}

/* 

2. Bucle while 

Se utiliza cuando no sabemos cuántas veces queremos repetir un bloque de código, pero si queremos que se repita mientras una condición es verdadera. Sintaxis: 

inicialización

  while (condición) {
    // código que se repite su ejecución
    incremento 
  }

*/

let j = 0; //iniciaclización 

while ( j < 5) {
  //código a ejcutar
  console.log(j); 
  j++; //incrementar 
}

/* 

3. Bucle do ___ while 

Es similar al bucle while, pero garantiza que el bloque de código se ejecute al menos una vez. Ya que la condición se evalua después de la ejecución. Sintaxis: 

inicialización

do { 
  // código que se ejcuta al menos una vez
  incremento
} while (condición); 

*/

let k = 0; 

do {
  console.log("Twice Rules!")
  k++; 
} while (k < 5); 