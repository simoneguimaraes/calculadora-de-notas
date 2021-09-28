var nome = prompt("Olá! Qual é o seu nome?")
var notaPrimeiroBimestre = Number.parseFloat(prompt("Digite a nota do Primeiro Bimestre"))
var notaSegundoBimestre = Number.parseFloat(prompt("Digite a nota do Segundo Bimestre"))
var notaTerceiroBimestre = Number.parseFloat(prompt("Digite a nota do Terceiro Bimestre"))
var notaQuartoBimestre = Number.parseFloat(prompt("Digite a nota do Quarto Bimestre"))

var notaFinal = ((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4)

var notaFixada = notaFinal.toFixed(1)

if (notaFixada >= 6) {
  alert("Parabéns, " + nome + "!!! Você foi aprovado com a média de " + notaFixada + ".")
} else {
  alert(nome + ", você foi reprovado. Sua média é de " + notaFixada + ".")
}



