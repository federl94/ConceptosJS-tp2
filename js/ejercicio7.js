/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/


let num = parseInt(prompt('Ingrese un número'));
for (let i = num;i>= 1; i--) {
    document.write('<br>')
    num = i
    for (let pira =i;pira>0;pira--)
    if (num<=50) {
        document.write(num)
    }
    else {
        alert('Ingrese un número menor a 51')
    }
}