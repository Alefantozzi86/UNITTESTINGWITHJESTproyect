// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}
//para pasar de dollar a euro
//declaramos una funcion con el nombre fromDollarToEuro
const fromDollartoEuro = function (valueInDolar) {
    //convertimos el valor a Euros
    let valueInEuro = (valueInDolar / oneEuroIs.USD);
    //retornamos el valor
    return valueInEuro;
}
//declaramos una funcion con el nombre fromDollarToYen
const fromDollarToYen = function (valueInDollar) {
    //convertimos el valor a Yen   
    let valueInYen = fromDollartoEuro(valueInDollar) * oneEuroIs.JPY;
    //retornamos el valor
    return valueInYen;
}
//declaramos una funcion con el nombre fromYentoEuro
const fromYentoEuro = function(valueInYen){
   //convertimos el valor a Euro
    let valueInEuro =(valueInYen / oneEuroIs.JPY);
 //retornamos el valor
    return valueInEuro;
}
//declaramos una funcion con el nombre fromYenToPound
const fromYenToPound = function(valueInYen){
    //convertimos el valor a Libras Esterlinas 
     let valueInBp = fromYentoEuro(valueInYen) * oneEuroIs.GBP;
     //retornamos el valor 
     return valueInBp;
    }

// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports =  { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };




