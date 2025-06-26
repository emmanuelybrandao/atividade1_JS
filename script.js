alert('Seja-bem vindo ao cálculo de notas.');

let notas = prompt("Digite suas notas separadas por vírgula:");
let vetorNotas = notas.split(",");

let somaNotas = 0;
for (let i = 0; i < vetorNotas.length; i++) {
  somaNotas += Number(vetorNotas[i]);
}

let media = somaNotas / vetorNotas.length;
alert(`A sua média final é ${media}.`);
