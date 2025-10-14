/* 

Arreglos 

Un arreglo es una colección de datos, es decir, una lista de elementos. 

En JS los arreglos se definen utilizando los corchetes [] y los elementos internos se separan por comas. 

Pueden contener el mismo tipo de dato o de diferentes tipos, incluso pueden contener arreglos anidados. 

*/

let frutas = ["manzana", "sandía", "piña", "uva", "mango"]; 
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Danna", 22, true];
let coordenadas = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]; 

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 

Length -> Nos indica la cantidad de elementos que tenemos dentro del arreglo. 

*/

console.log(frutas. length); //cantidad de datos. 
console.log(calificaciones.length);
console.log(misDatos.length);
console.log(coordenadas);

/* 

Indice -> Nos indica la posición del elemento dentro del arreglo.

Para acceder a los elementos de un arreglo utilizamos su índice. Los arreglos siempre comienzan con el índice 0 y se coloca el valor entre corchetes []. 

*/

console.log("Mi fruta favorita es la " + frutas[3] + "🍇");
console.log("Con X saqué " + calificaciones[3] + "😁");
console.log("Me llamo " + misDatos[0] + " y tengo " + misDatos[1] + "años");
console.log("El siguiente dato esta en un arreglo anidado: " + coordenadas[1][2]); 

/* 

Métodos de los arreglos: 

push() -> Agrega uno o más elementos al final del arreglo. 
pop() -> Elimina el último elemento del arreglo y lo devuelve.
shift() -> Elimina el primer elemento del arreglo y lo devuelve. 
unshift() -> Agrega uno o más elementos al inicio del arreglo. 
indexOf() -> Devuelve el índice del primer elemento que coicida con el valor especificado o regresa -1 si no encuentra nanais. 

*/

console.log(frutas. length); //5

frutas.push("fresas" , "plátano"); 
console.log(frutas. length); //7

let ultimaFruta = frutas.pop(); 
console.log(frutas. length); //6
console.log(ultimaFruta); //plátano

let primeraFruta = frutas.shift(); 
console.log(frutas. length); //5
console.log(primeraFruta); //manzana

frutas.unshift("guanabana" , "grosella" , "mamey");
console.log(frutas. length); //8 
frutas.push("mango"); 
console.log(frutas); 

let indiceFruta = frutas.indexOf("mango"); 
console.log(indiceFruta);

/* 

Iteración sobre arrays

Tomamos una lista de datos y accedemos a sus datos, a través de un bucle. 

*/
frutas.unshift("guayaba" , "papaya")

for(i = 0; i < frutas.length; i++) {
  console.log("Se me antojo una: " + frutas[i]); 
}