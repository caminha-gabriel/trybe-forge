/*pega salario bruto; encontra qual aliquota do inss usar;
encontra o valor exato a ser descontado; desconta do salario;
encontra o caso do IR a ser descontado; pega a aliquota, extrai do salario;
deduz a taxa fixa do imposto; retira a taxa total do salario;
(Algoritmo para organização)
*/

let salarioBruto = 4500;
let salarioPosInss = 0;
let salarioLiquido = 0;

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

if (salarioBruto <= 1556.94) {
   salarioPosInss = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
   salarioPosInss = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
   salarioPosInss = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
   salarioPosInss = salarioBruto - 570.88;
}

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

if (salarioPosInss <= 1903.98) {
    console.log('Sem imposto de renda a pagar!');
    salarioLiquido = salarioPosInss;
} else if (salarioPosInss >= 1903.99 && salarioPosInss <= 2826.65) {
    salarioLiquido = salarioPosInss - (salarioPosInss*0.075 -142.80)
} else if (salarioPosInss >= 2826.66 && salarioPosInss <= 3751.05) {
    salarioLiquido = salarioPosInss - (salarioPosInss*0.15 -354.80)
} else if (salarioPosInss >= 3751.06 && salarioPosInss <= 4668.68) {
    salarioLiquido = salarioPosInss - (salarioPosInss*0.225 -636.13)
} else if (salarioPosInss > 4664.68) {
    salarioLiquido = salarioPosInss - (salarioPosInss*0.275 -869.36)
}

console.log('Com um salário bruto de '+salarioBruto+'R$, seu salário final será de: '+salarioLiquido+'R$');