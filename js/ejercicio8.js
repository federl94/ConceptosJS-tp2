/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/
let numA = parseInt (prompt('Ingrese un número menor a 51'))
if (numA < 1 || numA>50) {
    alert('El número ingresado no es correcto')
}
else {
    for (let numInicio=1; numInicio<=numA;numInicio++) {
        for (let numTope=1; numTope<numInicio+1;numTope ++) {
            document.write(numTope)
        }
        document.write('<br>')
    }
}