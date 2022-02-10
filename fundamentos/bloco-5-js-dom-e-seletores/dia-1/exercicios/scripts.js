//     Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()


//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText(text, tag) {

    let tagArray = document.getElementsByTagName(tag);

    for (let i = 0; i < tagArray.length; i += 1) {
        tagArray[i].innerText = text;
        
    }
}

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorByClass(_class, color) {
    let content = document.getElementsByClassName(_class);
    content[0].style.backgroundColor = color;
}

changeColorByClass('main-content', 'rgb(76, 164, 109)');
//  Crie uma função que mude a cor do quadrado vermelho para branco.
function redSquareToWhite() {
    let square = document.getElementsByClassName('center-content')[0];
    square.style.backgroundColor = 'white';
}
redSquareToWhite();
//  Crie uma função que corrija o texto da tag <h1>.

function correctH1Text() {
    document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
}
correctH1Text();
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function tagPToUpper() {
    
}
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.


