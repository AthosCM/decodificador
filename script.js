const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado");
const txtCampoResultado = document.getElementById("#txt-resultado");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function campoResultado(idResult) {
  document.getElementById(idResult).style.display = "none";
}

function btnCriptografar() {
  const textoCriptografar = criptografar(textArea.value);
  resultado.value = textoCriptografar;
  textArea.value = "";
  if ((textArea.value = "") == true) {
    campoResultado();
  }
}

function criptografar(stringCriptografada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringCriptografada = stringCriptografada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
      if(stringCriptografada.includes(matrizCodigo[i] [0])) {
          stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
  }
  return stringCriptografada;
}

function btnDescriptografar() {
  const textoDescriptografar = descriptografar(textArea.value);
  resultado.value = textoDescriptografar;
  textArea.value = "";
  campoResultado();
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
      if(stringDescriptografada.includes(matrizCodigo[i] [1])) {
          stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
  }
  return stringDescriptografada;
}

function copiar() {
  const resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand('copy');
  alert("Texto Copiado: " + resultado.value);
}

//function limpar(idResult) {
//  document.getElementById(idResult).style.display = "block";
//} 