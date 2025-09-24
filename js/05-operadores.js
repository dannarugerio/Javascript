/* 

Operadores

Son simbolos que indican al interprete que debe realizarse una operación matemática, lógica o relacional y producir un resultado. 

1.- Operadores Aritmeticos 
Se utilizan para operaciones matemáticas básicas como la suma, resta, multiplicación y división. 
  + suma
  - resta 
  * multiplicar
  / dividir 
  % modulo (residuo de una división)
  ++ incremento (suma 1 al valor)
  -- decremento (resta 1 al valor)

Expresión: Conjunto de valores, variables y operadores.
*/ 

let a = 10; 
let b = 5;

console.log(a + b); //15
console.log(a - b); //5 
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0
a++;
console.log(a); //11
b--; 
console.log(b); // 4

/* 

2.- Operadores de Asignación 
Estos operadores se utilizan para asignar valores a las variables. 

= asignación 
+= suma y asigna 
-= resta y asigna
*= multiplica y asigna 
/= divide y asigna 
%= módulo y asigna

*/

let c = 20; 
c += 5; //25
c -= 10; //15
c *= 2; //30 
c /= 3; //10
c %= 3; // 1 

console.log(c)

/* 

3.- Operadores de Comparación 
Estos operadores se utilizan para comparar dos valores y devolver un valor booleano (true o false)

== igualdad (compara solo el valor)
=== igualdad estricta (compara el valor y el tipo)
!= desigualdad (compara solo si el valor es distinto)
!== desigualdad estricta (compara el valor y el tipo)
> mayor que 
< menor que 
>= mayor o igual que 
<= menor o igual que

*/

let d = 10; //number - numero 
let e = "10"; //string - cadena de caracteres

console.log(d == e); //true
console.log(d === e); //false
console.log(d != e); //false
console.log(d !== e); //true
console.log(d > 5); //true
console.log(d < 15); //true
console.log(d >= 10); //true
console.log(d <= 5); //false

/* 

4.-Operadores lógicos 
Se utilizan para comparar expresiones boleanas. 
&& AND (y) - Si ambos valores son verdadero el resultado de esa combinación es verdadero. Si al menos un valor es falso, el resultado es falso. 
|| OR (o) - Si al menos un valor es verdadero, el resultado es verdadero. Solo si ambos valores on falsos el resultado es falso. 
! NOT (no) - Niega el valor. El resultado es el valor contrario al que se está negando. 

*/

let f = true; 
let g = false; 

console.log(f && g); // false 
console.log(f || g); // true
console.log(!f); //false
console.log(!g); // true

