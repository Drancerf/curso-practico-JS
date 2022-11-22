// let precioOriginal=120;
// let descuento=18;

function calculoPrecioConDescuento (precio, descuento){
    let porcentajePrecioConDescuento= 100-descuento;
    let precioConDescuento=(precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });