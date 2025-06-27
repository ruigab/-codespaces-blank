function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
  
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      let classificacao = "";
  
      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc < 25) {
        classificacao = "Peso normal";
      } else if (imc < 30) {
        classificacao = "Sobrepeso";
      } else {
        classificacao = "Obesidade";
      }
  
      resultado.textContent = `IMC: ${imc.toFixed(2)} (${classificacao})`;
    }
     else {
      resultado.textContent = "Digite valores válidos";
    }
  }
  