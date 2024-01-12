/*En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.  */
let nrocuenta;
        let nombre;
        let saldo = 0;
        let saldoacre = 0;
        do {
            nrocuenta = parseInt(prompt('Ingrese nro de cuenta:'));
            if (nrocuenta >= 0) {
                nombre = prompt('Nombre del cliente:');
                saldo = parseFloat(prompt('Saldo actual:'));
                if (saldo > 0) {
                    saldoacre = saldoacre + saldo;
                    document.write(nombre + ' tiene saldo acreedor<br>');
                } else {
                    if (saldo < 0) {
                        document.write(nombre + ' tiene saldo deudor<br>');
                    } else {
                        document.write(nombre + ' tiene saldo nulo<br>');
                    }
                }

            }
        } while (nrocuenta > 0);
        document.write('Suma total de saldos acreedores:' + saldoacre);