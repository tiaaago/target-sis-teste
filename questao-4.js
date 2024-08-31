/* PUXANDO O ARQUIVO JSON DE FATURAMENTOS */
const faturamentosJson = require('./files/faturamentos.json')

/* TRANSFORMANDO O JSON EM UM ARRAY DE FATURAMENTOS */
const faturamentos = Object.entries(faturamentosJson.faturamentosDistribuidoras).map(([distribuidora, faturamento]) => ({ distribuidora, faturamento })).filter(faturamento => faturamento.faturamento > 0)

/* CALCULANDO O TOTAL DE FATURAMENTOS */
const totalFaturamentos = faturamentos.reduce((acc, faturamento) => acc + faturamento.faturamento, 0)

/* IMPRIMINDO OS RESULTADOS */
console.log(`================ RECIBO DE FATURAMENTOS ================`)
faturamentos.forEach(faturamento => {
    console.log(`${faturamento.distribuidora}: R$ ${faturamento.faturamento} (${((faturamento.faturamento / totalFaturamentos) * 100).toFixed(2)}%)`)
})
console.log(`========================================================`)