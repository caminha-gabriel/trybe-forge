const nota = 69;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovade!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na lista de espera.");
}
else if (nota < 60) {
    console.log("Você foi reprovado.")
}
else {
    console.log("Sua nota não condiz com os parâmetros.")
}