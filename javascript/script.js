function calcula_imc() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    //Formula para calcular IMC
    var imc = peso / (altura * altura);
    var message = '';

    if (peso == '' || altura == '') {
        document.getElementById("message").innerHTML = '<h4>Preencha os campos</h4>';
        return false;
    }

    if (imc < 18.5) {
        alert("Você está abaixo do peso. Indice de massa corporal:  " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Você esta no peso ideal. Indice de massa corporal:  " + imc.toFixed(2));
    } else if (imc >= 25 && imc < 29.9) {
        alert("Você está levemente acima do peso. Indice de massa corporal:  " + imc.toFixed(2));
    } else if (imc >= 30 && imc < 34.9) {
        alert("Cuidado! Obesidade grau 1. Indice de massa corporal:  " + imc.toFixed(2));
    } else if (imc >= 35 && imc <= 39, 9) {
        alert("Cuidado! Obesidade grau 2, obsesidade severa! Indice de massa corporal:  " + imc.toFixed(2))
    } else if (imc > 40)
        alert("Cuidado! Obesidade morbida, procure um médico, você corre risco de vida!!! Indice de massa corporal:  " + imc.toFixed(2));

    output.innerHTML = '<h1>' + imc + '</h1><h4>' + message + '</h4>';
}

function refresh() {
    document.getElementById("message").innerHTML = '';

    var clean = document.querySelectorAll("input");
    for (var i = 0; i < clean.length; i++) {
        clean[i].value = "";
    }
}