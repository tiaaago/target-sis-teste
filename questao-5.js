/* INFORMANDO A STRING DESEJADA */
const string = 'DEFINA AQUI A STRING DESEJADA';

/* INVERTENDO A STRING E ENVIANDO RESULTADO */
const stringArray = string.split('');
let stringInvertida = '';

for (let i = stringArray.length - 1; i >= 0; i--) {
    stringInvertida = `${stringInvertida}${stringArray[i]}`;

    if (i == 0) {
        console.log(stringInvertida);
    }
}