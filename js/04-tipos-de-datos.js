/* 
Tipos de datos 

Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programación. 

En JS existen varios tipos que se pueden agrupar en dos categorías principales: primitivos y complejos u objetos. 

Cada tipo de dato tiene sus propias características y usos específicos en la programación. 

  1.- Primitivos 
    Datos básicos que no se consideran "objetos" y no tienen "métodos".

    Number o número 
    Representan valores numericos ya sea enteros o decimales (punto flotante). 

    Strings o Cadena de caracteres 
    Representan texto. El texto se coloca entre comillas dobles o simples: texto texto. Se valen las dos, pero hay que ser consistentes.

    Boolean o Booleanos 
    Representan un valor lógico que pueden ser "true" o "false". 

    Underfined o Indefinido 
    Es el valor que se asigna a una variable que ha sido declarada pero no inicializada. 

    Null o Nulo 
    Representa la ausencia intencional de cualquier valor u objeto. Es un tipo de dato que indica que una variable no tienen ningun valor asignado.

*/

/* Numbers */
let miNumero = 6; //Enteros 
let miNumeroDecimal = 9.9; //Decimales 

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */
let miNombre = "Danna"; 
let miApellido = "Rugerio"; 

console.log(miNombre);
console.log(miApellido); 

/* Boolean */
let esEstudiante = true; 
let tieneTrabajo = false; 

console.log(esEstudiante);
console.log(tieneTrabajo);

/* Undefined */
let aprobareDesarrolloApps; //Inicializar una variable 
console.log(aprobareDesarrolloApps);

/* Null */
let meQuiere = null; 
console.log(meQuiere);

/* 
2. Complejos o de Objetos

  Array o Arreglo 
  Es un conjunto de datos que se almacenan en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas. 

  Object u Objeto 
  Es un conjunto de múltiples datos en pares "clave"-"valor". Se escriben entre {} y separados por comas 

  Functions o Funciones 
  Es un tipo de dato que puede ser "invocado". Se declaran con la palabra reservada "function" y el código que se ejecuta va entre {"código"}
*/

/* Array */
let misSeries = ["The Vampire Diaries", "The Originals", "TSITP"]; 
let misNumeros = [6, 12, 22, 42];
let tutifruti = ["Palabra", 1, true]; 

console.log(misSeries[0]); //The Vampire Diaries
console.log(misNumeros[2]); //22
console.log(tutifruti[1]); //1 

/* Object */
let perro = {
  nombre: "Kelly", 
  edad: 10, 
  color: "negro",
  ladra: true, 
  muerde: false 
}

console.log(perro.nombre); 
console.log(perro.edad); 
console.log(perro.color);

/* Functions */
function saludar() {
  //Codigo a ejecutar
  console.log("Hola mamá, estoy aprendiendo JS")
}

//Llamar a la function 
saludar(); 