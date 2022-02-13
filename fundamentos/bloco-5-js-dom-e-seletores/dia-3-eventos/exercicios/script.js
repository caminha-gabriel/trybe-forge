function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

// Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysUl = document.querySelector("#days");
  for (value of dezDaysList) {
    //criei o elemento(li)
    const dayOfMonth = document.createElement("li");
    //customizei com as devidas classes
    if (value === 24 || value === 25 || value === 31) {
      dayOfMonth.classList.add("holiday", "day");
    } else {
      dayOfMonth.classList.add("day");
    }
    if (value === 4 || value === 11 || value === 18 || value === 25) {
      dayOfMonth.classList.add("friday");
    }
    //coloquei um valor dentro do elemento até então vazio
    dayOfMonth.innerHTML = value;
    // inseri o elemento completo no Html
    daysUl.appendChild(dayOfMonth);
  }
}
createDaysOfTheMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidayButton(buttonName) {
  //criar o elemento novo
  let holidayButton = document.createElement("button");
  let btnContainer = document.querySelector(".buttons-container");
  //customizei com o id
  holidayButton.id = "btn-holiday";
  //atribui o parametro como nome do botao
  holidayButton.innerHTML = buttonName;
  //inseri o botao no html
  btnContainer.appendChild(holidayButton);
}
createHolidayButton("Feriados");

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function addClickHolidayButton() {
  let holidayButton = document.querySelector("#btn-holiday");

  holidayButton.addEventListener("click", function changeColor() {
    let holidays = document.getElementsByClassName("holiday");
    for (index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.color === "white") {
        holidays[index].style.backgroundColor = "rgb(238, 238, 238)";
        holidays[index].style.color = "";
        holidays[index].style.border = "";
      } else {
        holidays[index].style.backgroundColor = "#A020F0";
        holidays[index].style.color = "white";
        holidays[index].style.border = "solid -3px black";
      }
    }
  });
}
addClickHolidayButton();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton(name) {
  let fridayButton = document.createElement("button");
  let fatherContainer = document.querySelector(".buttons-container");
  fridayButton.id = "btn-friday";
  fridayButton.innerHTML = name;
  fatherContainer.appendChild(fridayButton);
}

createFridayButton("Sexta-feira");

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function addClickToFriday() {
  let fridayButton = document.querySelector("#btn-friday");
  let fridays = document.querySelectorAll(".friday");
  fridayButton.addEventListener("click", function () {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== "Sexta!") {
        fridays[index].innerHTML = "Sexta!";
      } else {
        fridays[index].innerHTML = [4, 11, 18, 25][index];
      }
    }
  });
}
addClickToFriday();

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomInDays() {
  let daysArray = document.querySelectorAll(".day");
  for (index = 0; index < daysArray.length; index += 1) {
    daysArray[index].addEventListener("mouseover", function (event) {
      event.target.style.fontSize = "28px";
    });
    daysArray[index].addEventListener("mouseout", function (event) {
      event.target.style.fontSize = "20px";
    });
  }
}
zoomInDays();
