// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

const createToObj = (obj, key, value) => obj[key] = value;
const carls = {
  name: 'carls',
  lastName: 'johnson'
}

createToObj(carls, 'duma', 'tiva')
console.log(carls);