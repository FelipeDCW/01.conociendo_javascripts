/* Celsius a kelvin 0 °C + 273.15 = 273.15 K */ 
/* Celsius a Fahrenheit  (0 °C × 9/5) + 32 = 32 °F */

/* Pedir el dato en celsius */
var Celsius = prompt("Ingresa la temperatura Celsius:")

var Kelvin = parseFloat(Celsius) + parseFloat(273.15)
/*  */
var Fahrenheit = ((parseFloat(Celsius) * 9/5)+32)

console.log(`El Valor en Kelvin de ${Celsius} celsius es de ${Kelvin}`)
console.log(`El Valor de Fahrenheit de ${Celsius} celsius es de ${Fahrenheit}`)

