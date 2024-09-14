// Clase 1 - Sintaxis, variables y contatenación
let nombre = "Giorno"
let fuerza = 3
let destreza = 2
let inteligencia = 2
let promedio = (fuerza+destreza+inteligencia) / 3
console.log(nombre)
console.log(fuerza, destreza, inteligencia, promedio)


const GatoMayor = "Zarpa Negra"



console.log(GatoMayor, nombre)

console.log( 5+ 2, 7*3, 8-4, 13/3)

// ------  Metodos del navegador

let nombreDeUsuario = prompt("Por favor, ingresa tu nombre")

console.log(nombreDeUsuario)
alert("Hola " + nombreDeUsuario)

let numUno = parseInt(prompt("Ahora ingresa un numero"))

let numDos = parseInt(prompt("Ahora, ingresa el segundo numero"))

let valorFinal = numUno + numDos

alert("El valor final es "+ valorFinal)