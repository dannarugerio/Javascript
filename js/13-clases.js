/* 

Las clases JS son una forma de definir objetos, sus propiedades y métodos creando un prototipo del cual se generaran varios objetos, heredando su comportamiento. 

Los nombres de las clases comienzan con mayúscula. 

Sintaxis: 
class nombreClase {
  //Utiizamos el método constructor especial para incializar objetos. 

  constructor(prop1, prop2) {
    this.key1 = prop1;
    this.key2 = prop1; 
  }
}

*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; 
    this.edad = edad;
  }

  saludar(){
        alert(Hola, soy ${this.nombre} y tengo ${this.edad})
    }
}

const persona1 = new Persona(Juanito, 21);
const persona2 = new Persona(Maria, 20);
const persona3 = new Persona(Javier, 22);

console.log(El es ${persona1.nombre} y tiene ${persona1.edad});
console.log(Ella es ${persona2.nombre} y tiene ${persona2.edad});
console.log(El es ${persona3.nombre} y tiene ${persona3.edad});

persona1.saludar();
persona2.saludar();
persona3.saludar();
