//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let tot = 0
while (confirm('¿Desea ingresar otro número?') != false) {
    let num = parseInt(prompt('Ingrese un número'));
    if (Number.isNaN(num)) {
    alert('No ingresó un número, por favor vuelva a intentarlo')
    }
    else {
        tot = tot + num
    }
}
document.write(tot)