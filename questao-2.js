/* SETANDO O NÚMERO */
const numero = 14;

/* VERIFICANDO A SEQUENCIA DE FIBONACCI E ENVIANDO O RESULTADO */
const fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] < numero) {
    const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proximo);
}

if (fibonacci[fibonacci.length - 1] == numero) {
    console.log('Esse número pertence a sequência de Fibonacci.');
} else {
    console.log('Esse número NÃO pertence a sequência de Fibonacci.');
}