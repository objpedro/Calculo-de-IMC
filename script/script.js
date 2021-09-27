function calcular() {
    const txtpeso = document.getElementById("peso");
    const txtaltura = document.getElementById("altura");

    let peso = parseFloat(txtpeso.value);
    let altura = parseFloat(txtaltura.value);

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        res.innerHTML = `Seu IMC é: ${imc.toFixed(1)}<br>Magreza | Obesidade: 0`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Normal | Obesidade: 0');
        res.innerHTML = `Seu IMC é: ${imc.toFixed(1)}<br>Normal | Obesidade: 0`;
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log('Sobrepeso | Obesidade: 1');
        res.innerHTML = `Seu IMC é: ${imc.toFixed(1)}<br>Sobrepeso | Obesidade: 1`;
    } else if (imc >= 30.0 && imc <= 39.9) {
        console.log('Obesidade | Obesidade: 2');
        res.innerHTML = `Seu IMC é: ${imc.toFixed(1)}<br>Obesidade | Obesidade: 2`;
    } else if (imc > 40.0) {
        console.log('Obesidade grave | Obesidade: 3');
        res.innerHTML = `Seu IMC é: ${imc.toFixed(1)}<br>Obesidade grave | Obesidade: 3`;
    } else {
        res.innerHTML = `Ops! Algo deu errado. Tente novamente`;
    }
}