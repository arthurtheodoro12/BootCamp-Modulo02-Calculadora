function Somar() {
    var Num1 = parseFloat(document.getElementById("num1").value);
    var Num2 = parseFloat(document.getElementById("num2").value);

    var Resultado = Num1 + Num2;
    document.getElementById("resultado").value = Resultado;
}
