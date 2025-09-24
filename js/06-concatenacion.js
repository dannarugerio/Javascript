/* 

Concatenación 

Es el proceso de unir dos o mas cadenas de texto en una sola. 
Esto se hace utilizando el operador de + o las plantillas literales (template strings) se usan con backticks ` ` (acento invertido o comillas agudas) 

*/

let miNombre = "Danna";
let miApellido = "Rugerio"; 

//Usando el operador +

let nombreCompleto = miNombre +" " + miApellido; 
console.log(nombreCompleto); 

//Usando plantillas literales 

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} 🤟 y tengo ${20+2} años` 
console.log(nombreNuevo); 

/* 

Si se utiliza el operador + con valores numéricos se suman. Pero si se usa con cadenas de caracter se concatena. 

*/

let resultado = 5 + 10; 
console.log(resultado); //15

let resultadoDos = "5" + 10; 
console.log(resultadoDos); //510

