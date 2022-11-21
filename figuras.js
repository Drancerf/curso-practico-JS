//codigo de Cuadrado
console.group("Cuadrados");

// let ladoCuadrado = 7;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4
}
//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm") ;

function areaCuadrado (lado){
    return lado * lado
}
//console.log("El area del cuadrado es: "+ areaCuadrado + "cm°2");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulo");

// let ladoTriangulo1 = 8;
// let ladoTriangulo2 = 8;
// let baseT = 4;
// let alturaT=5.5;

// console.log("Los lados del Triángulo miden: "+ ladoTriangulo1 + "cm, "+ ladoTriangulo2 + "cm y "+ baseT + "cm");

function perimetroTriangulo (lado1,  lado2, baseT){
    return lado1 + lado2 + baseT;
}
// console.log("El perimetro del Triángulo es: "+ perimetroTriangulo + "cm") ;

function areaTriangulo (baseT, alturaT){
    return (baseT*alturaT)/2;
}
// console.log("El area del Triángulo es: "+ areaTriangulo + "cm°2");

console.groupEnd();

//Codigo del Circulo
console.group("Circulo");
  
// let radioCirculo= 6;
// console.log("El radio del Circulo es: "+ radioCirculo+ "cm");

function diametroCirculo (radio){
    return radio*2;
}
//console.log("El diametro del Circulo es: "+ diametroCirculo+ "cm");

function perimetroCirculo (radio){
    let diametro= diametroCirculo(radio);
    return diametro * Math.PI;
} 

//console.log("El perimetro del Circulo es: "+ perimetroCirculo+ "cm");

function areaCirculo (radio){
    return (radio * radio) * Math.PI;
}
// console.log("El area del Circulo es: "+ areaCirculo+ "cm°2");
// console.log("Math.PI es: " + Math.PI);

console.groupEnd();

//Conexion del Html con las funciones

function calculaPerimetroCudrado(){
    let input =document.getElementById("InputCuadrado");
    let value= input.value;
    let perimetro=perimetroCuadrado(value);
    alert(perimetro);
}
function calculaAreaCuadrado(){
    let input =document.getElementById("InputCuadrado");
    let value= input.value;
    let area=areaCuadrado(value);
    alert(area);
}