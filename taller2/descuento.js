// let precioOriginal=120;
// let descuento=18;

function calculoPrecioConDescuento (precio, descuento){
    let porcentajePrecioConDescuento= 100-descuento;
    let precioConDescuento=(precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento
}

function clickPriceDiscount() {
    let name = document.getElementById("inputNameP");
    let nameP=name.value

    let price = document.getElementById("inputPrice");
    let valuePrice= price.value;

    let discount= document.getElementById("inputDiscount");
    let valueDiscount= discount.value;

    let priceDiscount=calculoPrecioConDescuento(valuePrice, valueDiscount);
    let resultP= document.getElementById("ResultP");
    resultP.innerText= "El precio de "+ nameP+" después de aplicarle el descuento de "+valueDiscount+"% es de " + priceDiscount+"$";
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });