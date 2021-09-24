var nome = prompt("Olá! Qual é o seu nome?")
var notaPrimeiroBimestre = 1
var notaSegundoBimestre = 5
var notaTerceiroBimestre = 8
var notaQuartoBimestre = 4

var notaFinal = ((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4)

var notaFixada = notaFinal.toFixed(1)

if (notaFixada >= 6) {
  alert("Parabéns, " + nome + "!!! Você foi aprovado com a média de " + notaFixada + ".")
} else {
  alert(nome + ", você foi reprovado. Sua média é de " + notaFixada + ".")
}


