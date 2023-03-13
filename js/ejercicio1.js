let edad = parseInt (prompt('Ingrese su edad'))
if(edad >= 18) {
    document.write('Ya puede conducir')
}
else if (edad < 18) {
    document.write('No tiene la edad para conducir')
}
else {
    document.write('Ingreso una opción no válida')
}