/* 

Objetos 
Son colecciones de propiedades. Una propiedad es una asociación entre un nombre (clave o key) y un valor (value). 

Los valores pueden ser de distintos tipos números, cadenas de texto, boleanos, arreglos, funciones...

Sintaxis: 

  nombreObjeto = {
  //Propiedades  
  clave1: valor,
  clave2: valor,
  clave3: valor,
  }

*/

const persona = {
  nombre: "Danna", 
  apellido: "Rugerio", 
  edad: 22,
  esInvitado: false, 
  monstruos: ["Vampiro", "Ghost", "Michael Myers"],

  saludar: function() {
    /* This es una palabra que autoreferencia al objeto */
    console.log("Hola mi nombre es " + this.nombre + " y me gusta " + this.monstruos[0]);
  }
}

console.log(persona); 

/* 

Acceder a las propiedades de un objeto utilizamos la notación punto o corchetes.

  objeto.clave -> Notación del punto
  objeto[clave] -> Notación de los corchetes

*/

console.log(persona.nombre); 
console.log(persona["apellido"]);

//Concatenamos Valores
console.log("Hola mi nombre es" + persona.nombre + persona.apellido + "y tengo" + persona.edad + "años!");

//Plantillas Literales
console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`); 

//Accedemos al boleano
console.log(persona.esInvitado); 

if(persona.esInvitado) {
  console.log( "Puede pasar y disfrutar del Halloween de ENFOCO" ); 
} else {
  console.log("No puedes pasar, regresate a tu casita")
}

//Acceder al array
console.log(persona.monstruos[0]); 

console.log(`Hola soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años e iré al halloween disfrazada de ${persona.monstruos[0]}`); 

/* 

Métodos de los objetos. 

Los métodos son funciones que están asosiadas a un objeto. Se pueden llamar utilizando la notación de punto. 

  objeto.método()

*/

console.log(persona.saludar()); 