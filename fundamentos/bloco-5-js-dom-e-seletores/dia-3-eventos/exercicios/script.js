function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();
  
  // Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  // Escreva seu código abaixo.

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];  
    const daysUl = document.querySelector('#days');
    for (value of dezDaysList) {
      //criei o elemento(li)
      const dayOfMonth = document.createElement('li');
      //customizei com as devidas classes
      if (value === 24 || value === 25 || value === 31) {
        dayOfMonth.classList.add('holiday', 'day');
      } else {
        dayOfMonth.classList.add('day');
      }
      if (value === 4 || value === 11 || value === 18 || value === 25) {
        dayOfMonth.classList.add('friday');
      }
      //coloquei um valor dentro do elemento até então vazio
      dayOfMonth.innerHTML = value;
      // inseri o elemento completo no Html
      daysUl.appendChild(dayOfMonth);
    }


  }
  createDaysOfTheMonth()