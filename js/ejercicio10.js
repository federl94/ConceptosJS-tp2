/*Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
const filas = parseInt(prompt('Ingrese un número de filas'))
const columnas = parseInt(prompt('Ingrese un número de columnas'))
let result = filas*columnas
document.write(`<table><tbody>`)
for (let filasUsuario = 0; filasUsuario<filas; filasUsuario++){

    document.write(`<tr>`)
    for (let columUsuario = 0; columUsuario<columnas; columUsuario++){      
            document.write(`<td>${result}</td>`)
            result = result - 1
        }

    document.write('</tr>')   
}

document.write(`</tbody></table>`)