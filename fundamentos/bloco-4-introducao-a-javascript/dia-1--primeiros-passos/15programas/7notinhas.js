let nota = 120;
let porcentagem = 0;

if (nota > 100) {
  nota = 0
}

if (nota >= 90) {
  porcentagem = '90+'
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
