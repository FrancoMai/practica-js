function convertir() {
    let valor = parseFloat(document.getElementById("cantidad").value);
    de = document.getElementById("de").value;
    a = document.getElementById("a").value;

    let dolar = 292.00
    let euro = 270.00
    let resultado = 0

    //peso a dolar
    if (de == 1 && a == 2) {
        resultado = valor / dolar;
    }

    //peso a euro
    else if (de == 1 && a == 3) {
        resultado = valor / euro;
    }

    //dolar a peso
    else if (de == 2 && a == 1) {
        resultado = valor * dolar;
    }

    //dolar a euro
    else if (de == 2 && a == 3) {
        resultado = valor * (dolar / euro);
    }

    //euro a peso
    else if (de == 3 && a == 1) {
        resultado = valor * euro;
    }

    //euro a dolar
    else if (de == 3 && a == 2) {
        resultado = valor * (euro / dolar);
    }

    //peso a peso, dolar a dolar, euro a euro
    else {
        resultado = valor;
    }
    document.getElementById("resultado").innerHTML = "Resultado: $" + resultado.toFixed(2);
    botonconvertir.addEventListener('click', convertir)

}






//     var resultado = 0
//     var dolar = 292.00
//     var euro = 270.00   if (document.getElementById("uno").checked){
//        resultado = valore / dolar ;
//        alert("El Cambio De Dólares A Pesos Argentinos Es: $" + resultado);    
//    }
//    else if (document.getElementById("dos").checked){        resultado = valore / euro ;
//        alert("El Cambio De Euros A Pesos Argentinos Es: €" + resultado);
//   }
//     else {
//         alert("DEBES COMPLETAR TODOS LOS CAMPOS")