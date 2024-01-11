/*Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50) */

document.write("<h2>Tabla de multiplicar del 5:</h2>");

for (let i = 1; i <= 10; i++) {
    let resultado = 5 * i;
    document.write("5 x " + i + " = " + resultado + "<br>");
}