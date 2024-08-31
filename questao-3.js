/* PUXANDO O ARQUIVO JSON DE FATURAMENTOS */
const faturamentosJson = require('./files/faturamentos.json')

/* TRANSFORMANDO O JSON EM UM ARRAY DE FATURAMENTOS */
const faturamentos = Object.values(faturamentosJson.faturamentos).filter(faturamento => faturamento > 0)

/* CALCULANDO O MENOR, MAIOR, MÉDIA E FATURAMENTOS ACIMA DA MÉDIA */
const menorFaturamento = faturamentos.sort((a, b) => a - b)[0]
const maiorFaturamento = faturamentos.sort((a, b) => b - a)[0]
const mediaFaturamentos = faturamentos.reduce((acc, faturamento) => acc + faturamento, 0) / faturamentos.length
const faturamentoAcimaMedia = faturamentos.filter(faturamento => faturamento > mediaFaturamentos)

/* IMPRIMINDO OS RESULTADOS */
console.log(`================ RECIBO DE FATURAMENTOS ================`)
console.log(`Menor faturamento: R$ ${menorFaturamento}`)
console.log(`Maior faturamento: R$ ${maiorFaturamento}`)
console.log(`Média dos faturamentos: R$ ${mediaFaturamentos.toFixed(2)}`)
console.log(`Quantidade de faturamentos acima da média: ${faturamentoAcimaMedia.length}`)
console.log(`========================================================`)