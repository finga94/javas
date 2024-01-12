/*Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o
 iguales a 7 y cuántos menores.*/
let x = 0;
        let suma = 0;
        while (x < 5) {
            let altura;
            altura = parseInt(prompt('Ingrese la altura en centímetros(Ej. 175)'));
            suma = suma + altura;
            x = x + 1;
        }
        let promedio = suma / 5;
        document.write('La altura promedio de las cinco personas es:' + promedio);