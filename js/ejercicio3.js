do {
let frase = prompt('Ingrese una frase')
    document.write(`${frase} - `)
}
while (confirm('Aceptar para seguir escribiendo') == true)