/* 

switch (variable) {
  // Casos según se comparen
  
  case valor1: 
  // El código a ejecutar 
  break; 
  
  case valor2: 
  //El código a ejecutar 
  break; 
  
  case valor3: 
  //El código a ejecutar
  break; 
  
  default: 
  //Este es el código que se ejecuta si la expresión no coincide con ningún caso. 
  break; // este es opcional
}

*/

let licenciatura = prompt("Escribe la licenciatura que te interesa: televisión, diseño o imagen"); //televisión, diseño, imagen. 
switch (licenciatura) {
  case "televisión": 
    console.log("Haz elegido la licenciatura de televisión, que mal por ti!"); 
    break;
  case "diseño": 
    console.log("Haz elegido la licenciatura de diseño, serás muy fregón!");
    break;
  case "imagen": 
    console.log("Haz elegido la licenciatura imagen, bienvenidx"); 
    break;
  default: 
    console.log("Estás loquitx!")
} 

