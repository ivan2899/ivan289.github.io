
function ConvertirCelsiusAFahrenheit(temp) {
    let resultado;

    resultado = (temp * 1.8) + 32;
    return resultado;
}

function ConvertirCelsiusAKelvin(temp) {
    let resultado;

    resultado = temp + 273.15;
    return resultado;
}

function ConvertirFahrenheitACelsius(temp) {
    let resultado;

    resultado = (temp - 32) * (5 / 9);
    return resultado;
}

function ConvertirFahrenheitAKelvin(temp) {
    let resultado;

    resultado = (temp - 32) * (5 / 9) + 273.15;
    return resultado;
}

function ConvertirKelvinACelsius(temp) {
    let resultado;

    resultado = temp - 273.15;
    return resultado;
}

function ConvertirKelvinAFahrenheit(temp) {
    let resultado;

    resultado = (temp - 273.15) * 1.8 + 32;
    return resultado;
}

function OperarGrados(id1, id2, convertir) {

    let auxIngresoEn = document.getElementById(id2).value;
    let ingresoEn = parseInt(auxIngresoEn);

    let temp = document.getElementById(id1).value;
    let tempValida = parseFloat(temp);
    let auxTexto;

    // 1C 2K 3F

    switch (ingresoEn) {
        case 1:
            convertir == 2 ? auxTexto = ConvertirCelsiusAKelvin(tempValida) + " °K" : convertir == 3 ? auxTexto = ConvertirCelsiusAFahrenheit(tempValida) + " °F" : auxTexto = tempValida + " °C";
            break;
        case 2:
            convertir == 1 ? auxTexto = ConvertirKelvinACelsius(tempValida) + " °C" : convertir == 3 ? auxTexto = ConvertirKelvinAFahrenheit(tempValida) + " °F" : auxTexto = tempValida + " °K";
            break;
        case 3:
            convertir == 1 ? auxTexto = ConvertirFahrenheitACelsius(tempValida) + " °C" : convertir == 2 ? auxTexto = ConvertirFahrenheitAKelvin(tempValida) + " °K" : auxTexto = tempValida + " °F";
            break;
    }

        isNaN(tempValida) ? document.getElementById('resTemp').innerHTML = "No se ingresó un num valido" : document.getElementById('resTemp').innerHTML = auxTexto;
}
