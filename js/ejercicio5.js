/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/
while (confirm('¿Desea continuar?') ==true){
    let num = parseInt(prompt('Ingrese un número'))
    let resto = 0
    if (num>0 && num<99999999) {
        resto = num % 23
        if (num===0){
            document.write('<br> Le corresponde la letra T')
        }
        if (num===1) {
            document.write('<br> Le corresponde la letra R')
        }
        if (num===2) {
            document.write('<br> Le corresponde la letra W')
        }
        if (num===3) {
            document.write('<br> Le corresponde la letra A')
        }
        if (num===4) {
            document.write('<br> Le corresponde la letra G')
        }
        if (num===5) {
            document.write('<br> Le corresponde la letra M')
        }
        if (num===6) {
            document.write('<br> Le corresponde la letra Y')
        }
        if (num===7) {
            document.write('<br> Le corresponde la letra F')
        }
        if (num===8) {
            document.write('<br> Le corresponde la letra P')
        }
        if (num===9) {
            document.write('<br> Le corresponde la letra D')
        }
        if (num===10) {
            document.write('<br> Le corresponde la letra X')
        }
        if (num===11) {
            document.write('<br> Le corresponde la letra B')
        }
        if (num===12) {
            document.write('<br> Le corresponde la letra N')
        }
        if (num===13) {
            document.write('<br> Le corresponde la letra J')
        }
        if (num===14) {
            document.write('<br> Le corresponde la letra Z')
        }
        if (num===15) {
            document.write('<br> Le corresponde la letra S')
        }
        if (num===16) {
            document.write('<br> Le corresponde la letra Q')
        }
        if (num===17) {
            document.write('<br> Le corresponde la letra V')
        }
        if (num===18) {
            document.write('<br> Le corresponde la letra H')
        }
        if (num===19) {
            document.write('<br> Le corresponde la letra L')
        }
        if (num===20) {
            document.write('<br> Le corresponde la letra C')
        }
        if (num===21) {
            document.write('<br> Le corresponde la letra K')
        }
        if (num===22) {
            document.write('<br> Le corresponde la letra E')
        }
    }
    else {
        document.write('<br> El número ingresado no es válido')
    }
}