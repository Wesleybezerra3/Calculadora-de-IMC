function calcular() {
  var altura = document.getElementById("alt");
  var peso = document.getElementById("peso");
  var res = document.getElementById("res");
  if (
    altura.value.length == 0 ||
    peso.value.length == 0 ||
    altura.value <= 0 ||
    peso.value <= 0
  ) {
    alert("[ERRO] Preencha novamente!");
  } else {
    var altura = Number(alt.value);
    var peso = Number(peso.value);
    var resultado = peso / altura ** 2;
    res.style.backgroundColor = " #222121";
    res.innerHTML = `Seu IMC: ${resultado.toFixed(
      2
    )}  <br> Consulte seu IMC na tabela abaixo.`;
  }
}
