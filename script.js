alert('Seja-bem vindo ao cálculo de notas.');

let notas = prompt("Digite suas notas separadas por vírgula:");
let vetorNotas = entrada.split(",");

let somaNotas = 0;
for (let i = 0; i < vetorNotas.length; i++) {
  somaNotas += vetorNotas[i];
}

let media = somaNotas / vetorNotas.length;
alert(`A sua média final é ${media}.`);