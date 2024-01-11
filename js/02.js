/*Realizar un programa que imprima 25 términos de la serie 
11 - 22 - 33 - 44, etc. 
(No se ingresan valores por teclado). */
let serie;
serie = 11;
let x;
x = 1;
while (x <= 25) {
    document.write(serie);
    document.write('<br>');
    x = x + 1;
    serie = serie + 11;
}