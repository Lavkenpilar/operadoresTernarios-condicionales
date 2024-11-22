// sintaxis  condicion ? expr1 : expr2  una expresión se evalua como true o false. si la condición es true, el operador retorna el valor de la expr1; de lo contrario devuelve el valor de la expr2

/* ejemplo1: mostrando un mensaje diferente en funcion del valor de la varible*/
const texto = document.querySelector ("#ejemplos")
let isMember = false
texto.innerHTML = "La cuota es de:" + (isMember ? "$2.00":"10.00")
