function calcular(operacao) {
    var Num1 = parseFloat(document.getElementById("num1").value);
    var Num2 = parseFloat(document.getElementById("num2").value);
    var Resultado

    if(operacao === 'soma') {
        Resultado = Num1 + Num2;
    } else if(operacao === 'sub') {
        Resultado = Num1 - Num2;
    } else if(operacao === 'multi') {
        Resultado = Num1 * Num2
    } else if(operacao === "div") {
        if(Num2 == 0) {
            alert("Não é possível dividir por 0!")
            document.getElementById("num2").focus()
        } else {
            Resultado = Num1/Num2
        }
    }

    document.getElementById("resultado").value = Resultado.toFixed(2);
}
