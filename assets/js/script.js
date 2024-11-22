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