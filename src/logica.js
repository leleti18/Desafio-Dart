var unidade = ['','um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
var dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
var numeros = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];

// Funcao que converte em millhar se nao for ele  retorna para centena
function convert_mil(num) {
  if (num >= 1000) {
    return convert_centena(Math.floor(num / 1000)) + " mil " + convert_centena(num % 1000);
  } else {
    return convert_centena(num);
  }
}
// Funcao para converte em centenas se for menos irá retornar para funcao de numero ( que no caso é dentros das dezenas)
function convert_centena(num) {
  if (num > 99) {
    return unidade[Math.floor(num / 100)] + " cem " + convert_numeros(num % 100);
  } else {
    return convert_numeros(num);
  }
}

// Aqui temos uma funcao para converte o numero em dezenas, se ele for menor ele entende como dezena
function convert_numeros(num) {
  if (num < 10) return unidade[num];
  else if (num >= 10 && num < 20) return numeros[num - 10];
  else {
    return dezenas[Math.floor(num / 10)] + " " + unidade[num % 10];
  }
}

// Funcao que serve para converte as unidades, ele confere se o numero nao é igual a zero se nao for ele manda para funcao de millhar
function convert(num) {
  if (num == 0) return "zero";
  else return convert_mil(num);
}

// Aqui a funcao que ira escolher ate qual numero irá percorrer para fazer a contagem de letras
function main(totalElementos) {
  // Gera o array 
  var cases = Array.from(Array(totalElementos).keys());

  let letters = ""

// Loop para juntar todas as letras sem espacamento
  for (var i = 0; i < cases.length; i++) {
    letters += convert(cases[i]).replaceAll(' ', '')
  }

// Respondendo
  alert("A resposta é : "+letters.length)
}



