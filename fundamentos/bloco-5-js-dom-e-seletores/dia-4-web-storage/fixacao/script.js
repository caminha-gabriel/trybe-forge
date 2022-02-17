console.log(localStorage.length);
localStorage.setItem('firstname', 'Adam');
localStorage.setItem('lastname', 'Smith');
console.log(localStorage.getItem('lastname'));
localStorage.clear()

// console.log(sessionStorage.length);
// sessionStorage.setItem('firstname', 'Adam');
// sessionStorage.setItem('lastname', 'Smith');
// console.log(sessionStorage.getItem('lastname'));
// sessionStorage.removeItem('lastname');
// sessionStorage.clear();

// OBS: Tanto o localStorage quanto o sessionStorage , armazenam dados no formato chave e valor e os valores salvos serão sempre no formato string.

// const myObj = {
//     name: 'Link',
//     age: 20,
//   };
//   localStorage.setItem('myData', JSON.stringify(myObj));
// console.log(localStorage.getItem('myData'));
// const recoveredObject = JSON.parse(localStorage.getItem('myData'));
// console.log(recoveredObject);
