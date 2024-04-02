function calcular(operacao) {
    var Num1 = parseFloat(document.getElementById("num1").value);
    var Num2 = parseFloat(document.getElementById("num2").value);
    var Resultado;

    if(operacao === '+') {
        Resultado = Num1 + Num2;
    } else if(operacao === '-') {
        Resultado = Num1 - Num2;
    } else if(operacao === '*') {
        Resultado = Num1 * Num2;
    } else if(operacao === "/") {
        if(Num2 == 0) {
            alert("Não é possível dividir por 0!");
            document.getElementById("num2").focus();
            return;
        } else {
            Resultado = Num1 / Num2;
        }
    }

    document.getElementById("resultado").value = Resultado.toFixed(2);

    let History = document.getElementById("historico");
    let newHistoryElement = document.createElement("div");
    newHistoryElement.innerHTML = Num1 + " " + operacao + " " + Num2 + " = " + Resultado.toFixed(2);
    History.insertBefore(newHistoryElement, History.firstChild);

    if(History.children.length > 10) {
        History.removeChild(History.childNodes[10]);
    }
}

