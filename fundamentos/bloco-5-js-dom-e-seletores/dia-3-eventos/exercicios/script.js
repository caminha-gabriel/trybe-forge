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

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function newTask(name) {
  let task = document.createElement("span");
  let fatherMyTasks = document.querySelector(".my-tasks");
  task.innerHTML = name;
  task.classList.add("myTask");
  fatherMyTasks.appendChild(task);
}

newTask("Estudar");

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addColor(color) {
  let divTask = document.createElement("div");
  let fatherTask = document.querySelector(".my-tasks");
  divTask.classList.add("task");
  divTask.style.backgroundColor = color;
  fatherTask.appendChild(divTask);
}

addColor("yellow");

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selectTask() {
  let task = document.querySelector(".task");
  task.addEventListener("click", function (event) {
    if (event.target.classList.contains("task-selected")) {
      event.target.classList.remove("task-selected");
    } else {
      event.target.classList.add("task-selected");
    }
  });
}

selectTask();

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function addColorTaskToDay() {
  let divWithColor = document.querySelector(".task");
  let days = document.querySelectorAll(".day");
  let divColor = divWithColor.style.backgroundColor;
  let normalColor = "#eee";
  
  for (index = 0; index < days.length; index += 1) {
    days[index].addEventListener("click", function (event) {
      let eventColor = event.target.style.backgroundColor;
      let taskSelected = document.querySelectorAll(".task-selected");
      if (taskSelected.length > 0 && eventColor !== divColor) {
        event.target.style.backgroundColor = divColor;
      } else if (taskSelected.length > 0 && eventColor === divColor) {
        event.target.style.backgroundColor = normalColor;
      }
      
    });
  }
}

addColorTaskToDay();
