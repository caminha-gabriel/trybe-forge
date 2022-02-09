function makeMath(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
}

function findBigger(a, b, c) {
  if (a > b && a > c) {
    console.log("A maior constante é: " + a);
  } else if (b > a && b > c) {
    console.log("A maior constante é: " + b);
  } else if (c > a && c > b) {
    console.log("A maior constante é: " + c);
  }
}

function isPositive(a) {
  if (a > 0) {
    console.log("positive");
  } else if (a < 0) {
    console.log("negative");
  } else if (a === 0) {
    console.log("zero");
  }
}

function isTriangle(angA, angB, angC) {
  if (angA + angB + angC === 180) {
    console.log(true);
  } else if (angA + angB + angC !== 180) {
    console.log(false);
  } else if (angA + angB + angC < 0) {
    console.log("Deu ruim");
  }
}

function chessMove(pecaXadrez) {
  switch (pecaXadrez.toLowerCase()) {
    case "bispo":
      console.log("Diagonais sem limite");
      break;

    case "cavaleiro":
      console.log("L");
      break;

    case "torre":
      console.log("Linhas Retas sem limite");
      break;

    case "peão":
      console.log(
        "Duas casas a frentes caso seja a primeira jogada, uma casa a frente em qualquer outro caso"
      );
      break;

    case "rainha":
      console.log("Todas as direções sem limite");
      break;

    case "rei":
      console.log("Uma casa ao seu redor em qualquer direção");
      break;

    default:
      console.error("cabo");
  }
}

function qualNota(nota) {
  let porcentagem = 0;

  if (nota > 100) {
    nota = 0;
  }

  if (nota >= 90) {
    porcentagem = "90+";
  } else if (nota >= 80) {
    porcentagem = "80+";
  } else if (nota >= 70) {
    porcentagem = "70+";
  } else if (nota >= 60) {
    porcentagem = "60+";
  } else if (nota >= 50) {
    porcentagem = "50+";
  } else if (nota < 50 && nota > 0) {
    porcentagem = "50-";
  }
  switch (porcentagem) {
    case "90+":
      console.log("A");
      break;

    case "80+":
      console.log("B");
      break;

    case "70+":
      console.log("C");
      break;

    case "60+":
      console.log("D");
      break;

    case "50+":
      console.log("E");
      break;

    case "50-":
      console.log("F");
      break;

    default:
      console.log("erro");
  }
}

function algumPar(numero1, numero2, numero3) {
  if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function algumImpar(numero1, numero2, numero3) {
    if (numero1 % 2 !== 0 || numero1 === 1|| numero2 % 2 !== 0 || numero2 === 1 || numero3 % 2 !== 0 || numero3 === 1)  {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

function lucroEm1000(custo, valorVenda) {
    const custoCerto = ((custo*1.2)*1000)
const vendaCerto = valorVenda*1000

const lucro = vendaCerto - custoCerto

if (custo <= 0 || valorVenda <= 0) {
    console.log('Erro');
} else {
    console.log('O Lucro com as vendas será de: '+lucro+'R$.');
}
}

function impostos(salarioBruto) {
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
}

impostos(1000)