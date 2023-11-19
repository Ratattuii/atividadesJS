// Coleta e Análise de Dados do Usuário
let nome, cidade;

console.log(typeof nome);
console.log(typeof cidade);

nome = prompt("Digite seu nome:");
cidade = prompt("Digite a cidade onde você mora:");

console.log(typeof nome);
console.log(typeof cidade);

console.log(`Olá, meu nome é ${nome} e eu moro em ${cidade}`);

// Perguntas Sim ou Não
let pergunta1 = prompt("Você gosta de programar? (Sim ou Não)");
let pergunta2 = prompt("Você já viajou para fora do país? (Sim ou Não)");
let pergunta3 = prompt("Você tem animais de estimação? (Sim ou Não)");

console.log("Você gosta de programar? " + pergunta1);
console.log("Você já viajou para fora do país? " + pergunta2);
console.log("Você tem animais de estimação? " + pergunta3);

// Troca de Valores entre Variáveis
let x = 5;
let y = 10;

console.log("Valores iniciais: x =", x, "e y =", y);

[x, y] = [y, x];

console.log("Valores trocados: x =", x, "e y =", y);

// Operações Matemáticas com Entrada do Usuário
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;

console.log(`1. A soma dos números é: ${soma}`);
console.log(`2. A multiplicação dos números é: ${multiplicacao}`);