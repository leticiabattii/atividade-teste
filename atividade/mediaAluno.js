// Solicita ao usuário para digitar o nome do aluno
const nomeAluno = prompt("Digite o nome do aluno: ");

// Solicita ao usuário para digitar as quatro notas
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
const nota4 = parseFloat(prompt("Digite a quarta nota: "));

// Calcula a média das quatro notas
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Verifica se o aluno foi aprovado ou reprovado
let situacao;
if (media >= 7) {
  situacao = "aprovado";
} else {
  situacao = "reprovado";
}

// Imprime o nome do aluno, a média das notas e sua situação (aprovado ou reprovado)
alert(`Aluno: ${nomeAluno}`);
alert(`Média das notas: ${media.toFixed(2)}`);
alert(`Situação: ${situacao}`);
