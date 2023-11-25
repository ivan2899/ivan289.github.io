//TODO: Hacer funcion EsBinario (valide que sea 1 y 0 unicamente), lo mismo con decimal, etc.
//TODO: Cargar en el resultado, 'se ingreso un caracter no valido en el sistema Binario'
//TODO: 
//TODO: 
//TODO: 
//TODO: 
//TODO: 
//TODO: 

function ConvertirDecimalABinario(numDecimal) {
    let retorno;

    let numMax = 33554432;
    let numBinario = "";
    let band = false;

    if (numDecimal >= 0) {
        for (let i = 0; i < 26; i++) {
            if (numDecimal >= numMax) {
                numBinario += "1";
                numDecimal = numDecimal - numMax;
                band = true;
            }
            else {
                if (band) {
                    numBinario += "0";
                }
            }
            numMax = numMax / 2;
        }
        retorno = numBinario;
    }
    else {
        retorno = "Numero inválido";
    }
    return retorno;
}

function ConvertirBinarioADecimal(num) {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

function OperarNumeros(id1, id2, convertir) {

    let auxIngresoEn = document.getElementById(id2).value;
    let ingresoEn = parseInt(auxIngresoEn);

    let num = document.getElementById(id1).value;
    let numValido = parseFloat(num);
    let auxTexto;

    // 1Dec 2Bin 3Hexa 4Octal 5Romano

    switch (ingresoEn) {
        case 1:
            convertir == 2 ? auxTexto = "Binario: " + ConvertirDecimalABinario(numValido) : auxTexto = "Decimal: " + numValido;
            break;
        case 2:
            convertir == 1 ? auxTexto = "Decimal: " + ConvertirBinarioADecimal(numValido.toString()) : auxTexto = "Binario: " + numValido;
            break;
  
    }

    isNaN(numValido) ? document.getElementById('resNum').innerHTML = "No se ingresó un num valido" : document.getElementById('resNum').innerHTML = auxTexto;
}


