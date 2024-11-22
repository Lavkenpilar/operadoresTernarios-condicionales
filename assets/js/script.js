// sintaxis  condicion ? expr1 : expr2  una expresión se evalua como true o false. si la condición es true, el operador retorna el valor de la expr1; de lo contrario devuelve el valor de la expr2

/* ejemplo1: mostrando un mensaje diferente en funcion del valor de la varible*/
const texto = document.querySelector ("#ejemplos")
let isMember = false
texto.innerHTML = "La cuota es de:" + (isMember ? "$2.00":"10.00")

// ejemplo2: asignando valores dependiendo del resultado de la condicion ternaria
let elvisLives = Math.PI > 4 ? "Sip" : "Nop"
console.log (elvisLives)
 
// ejemplo3: realizando evaluaciones ternarias múltiples (el operador condicional es asociativo)
let firstCheck = false,
secondCheck = false,
access = firstCheck 
? "acceso denegado"
: secondCheck
? "acceso denegado"
: "acceso permitido" 

console.log (access)

// ejemplo4: usando operadores ternarios en espacio vacio con el propósito de realizar diferentes operaciones

let stop = false,
age = 15
age > 18 ? location.assign ("continue.html") : (stop = true)
console.log (stop)

// ejemplo5: realizando más de una operación por caso, separándolas con una coma
let stop2 = false,
age2 = 14

age2 > 18
? (alert ("OK, puedes continuar"), location.assign("continue.html"))
: ((stop2=true), alert ("Disculpa, eres menor de edad!"))

//ejemplo6: realizando más de una operación durante la asignación de un valor, el último valor separado por una coma del paréntesis será el valor asignado
let age3 = 16
let url = 
age > 18
? (alert ("OK, puedes continuar"),"continue.html")
// alert devuelve "undefined", pero será ingnorado porque no es el ultimo valor separado por comas del paréntesis
: (alert ("Eres menor de edad"),
alert ("Disculpa"),"stop.html")
location.assign(url)