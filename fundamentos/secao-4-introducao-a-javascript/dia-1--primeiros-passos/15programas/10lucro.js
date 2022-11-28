const custo = 50;
const valorVenda = 75;

// multiplica ambos por 1000; multiplica o custo por 1,2; tira o custo com imposto do total de venda;
// erro se algum for menor que 0

const custoCerto = ((custo*1.2)*1000)
const vendaCerto = valorVenda*1000

const lucro = vendaCerto - custoCerto

if (custo <= 0 || valorVenda <= 0) {
    console.log('Erro');
} else {
    console.log('O Lucro com as vendas será de: '+lucro+'R$.');
}