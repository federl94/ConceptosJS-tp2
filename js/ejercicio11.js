/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

let nombreA = prompt('Ingrese un nombre')
let edadA = prompt('Ingrese una edad')
let nombreB = prompt('Ingrese un nombre')
let edadB = prompt('Ingrese una edad')
let nombreC = prompt('Ingrese un nombre')
let edadC = prompt('Ingrese una edad')

let mayor = Math.max(edadA, edadB, edadC);

if (mayor == edadA) {
    document.write(`<h3>${nombreA} es el mayor</h3>`)
}
if (mayor == edadB){
    document.write(`<h3>${nombreB} es el mayor</h3>`)
}
if (mayor == edadC){
    document.write(`<h3>${nombreC} es el mayor</h3>`)
}