/* Crear una calculadora que realice operaciones básicas. */

function calcular(num1, num2, operacion) {
    let resultado;

    if (operacion === "+") {
        resultado = num1 + num2;
    } else if (operacion === "-") {
        resultado = num1 - num2;
    } else if (operacion === "*") {
        resultado = num1 * num2;
    } else if (operacion === "/") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        resultado = num1 / num2;
    } else {
        return "Operación no válida.";
    }

    return "El resultado es: " + resultado;
}

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let operacion = prompt("Ingresa la operación (+, -, *, /):");
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Debes ingresar números válidos.");
} else {
    let resultado = calcular(numero1, numero2, operacion);
    console.log(resultado);
}
