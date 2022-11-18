//codigo de Cuadrado
console.group("Cuadrados");

let ladoCuadrado = 7;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

let perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm") ;

let areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+ areaCuadrado + "cm°2");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");

let ladoTriangulo1 = 8;
let ladoTriangulo2 = 8;
let baseT = 4;
let alturaT=5.5;

console.log("Los lados del Triángulo miden: "+ ladoTriangulo1 + "cm, "+ ladoTriangulo2 + "cm y "+ baseT + "cm");

let perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseT;
console.log("El perimetro del Triángulo es: "+ perimetroTriangulo + "cm") ;

let areaTriangulo = (baseT * alturaT)/2;
console.log("El area del Triángulo es: "+ areaTriangulo + "cm°2");

console.groupEnd();

//Codigo del Circulo
console.group("Circulo");
  
let radioCirculo= 6;
console.log("El radio del Circulo es: "+ radioCirculo+ "cm");

let diametroCirculo= radioCirculo*2;
console.log("El diametro del Circulo es: "+ diametroCirculo+ "cm");

let perimetroCirculo= diametroCirculo* Math.PI;
console.log("El perimetro del Circulo es: "+ perimetroCirculo+ "cm");

let areaCirculo=(radioCirculo*radioCirculo) * Math.PI;
console.log("El area del Circulo es: "+ areaCirculo+ "cm°2");
console.log("Math.PI es: " + Math.PI);

console.groupEnd();