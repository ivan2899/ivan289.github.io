function Sumar(num1, num2) {
    return num1 + num2;
}

function Restar(num1, num2) {
    return num1 - num2;
}

function Multiplicar(num1, num2) {
    return num1 * num2;
}

function Dividir(num1, num2) {
    let resultado;

    num2 == 0 ? resultado = "No se puede dividir por cero" : resultado = num1 / num2;
    return resultado;
}

function Calcular(num1, num2, operador) {
    let resultado;

    //TODO: -66 -9; cambia el numero y pone -6-9 y da NaN (?)
    //TODO: si pones un numero y lo borras, podes volver a poner un operador y queda 99+++++++++

    switch (operador) {
        case '+':
            resultado = Sumar(num1, num2);
            break;

        case '-':
            resultado = Restar(num1, num2);
            break;

        case '*':
            resultado = Multiplicar(num1, num2);
            break;

        case '/':
            resultado = Dividir(num1, num2);
            break;
    }
    return resultado;
}

/* ----------- XDDD -------------------*/

let numero1; let numero2;
let operador;
let bandOperador = false;

let num = "302A";
let bin;
let dec;

bin = ConvertirDecimalABinario(num);
dec = ConvertirBinarioADecimal(bin);
console.log(bin);
console.log(dec);

console.log(ValidarFecha(35, 12, 2002));
console.log(ValidarFecha(29, 2, 2024));
console.log(ValidarFecha(29, 2, 2023));
console.log(ValidarFecha(30, 15, 2023));
console.log(ValidarFecha(15, -3, 2002));
console.log(ValidarFecha(-2, 12, 2002));

Calcular(50, 0, '/');



function ValidarFecha(day, month, year) {
    let ok = false;
    let days = 0;
    let anioBiciesto;

    anioBiciesto = ValidarAnioBiciesto(year);

    if (month != null && month >= 0 && month <= 12) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
            case 2:
                anioBiciesto ? days = 29 : days = 28;
                break;
        }
    }

    if (day != null && day >= 0 && day <= days) {
        ok = true;
    }

    return ok;
}

function ValidarAnioBiciesto(year) {
    return (year % 4) == 0 ? anioOk = true : anioOk = false;
}



function MostrarCaracter(car) {
    alert(car);
}

function CargarCaracter(car, id) {
    let sePudo = false;
    let ant;

    if (car === '+' || car === '-' || car === '*' || car === '/') {
        operador = car;
    }

    ant = ObtenerTexto(id);
    ant += car;
    document.getElementById(id).value = ant;

    return sePudo;
}

function ObtenerTexto(id) {
    return document.getElementById(id).value;
}

function LimpiarId(id) {
    document.getElementById(id).value = "";
}

function CargarResultado(id) {
    console.log(numero1);
    console.log(numero2);
    console.log(operador);
    let num;
    let lista = ObtenerTexto(id);
    lista = lista.split(operador)

    numero1 = parseFloat(lista[0]);
    numero2 = parseFloat(lista[1]);
    let numString = Calcular(numero1, numero2, operador);

    LimpiarId(id);
    operador = undefined;
    document.getElementById(id).value = numString;
}

function OperadorCargado(car, id) {

    if (operador === undefined) {
        CargarCaracter(car, id);
        bandOperador = true;
    }
    else {
        RemoverUltimocaracter(id);
        CargarCaracter(car, id);
        bandOperador = true;
    }
}

function RemoverUltimocaracter(id) {
    let aux = ObtenerTexto(id);
    let nea = aux.substring(0, aux.length - 1);
    document.getElementById(id).value = nea;
    operador = undefined;
}

//TODO: ordenar las funciones en los respectivos archivos
