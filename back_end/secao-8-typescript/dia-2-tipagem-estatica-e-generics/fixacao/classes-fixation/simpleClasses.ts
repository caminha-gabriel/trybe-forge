class Dog {
  name: string;
  breed: string;
  color: string;
  age?: number;

  constructor(name: string, breed:string, color:string, age?: number) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log(`${this.name} is barking.`);
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }

  walk(): void {
    console.log(`${this.name} is walking.`);
  }
}

const dog1 = new Dog('Bob', 'Yorkshire', 'black');
dog1.bark();

dog1.age = 6;

console.log(dog1);


class House {
  address: string;
  color: string;
  area: string;

  constructor(address: string, color: string, area:string) {
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

class Flight {
  time: Date;
  company: string;
  airport: string;
  price?: number;

  constructor(time: Date, company: string, airport: string, price?: number) {
    this.time = time;
    this.company = company;
    this.airport = airport;
    this.price = price;
  }
}

const flight1 = new Flight(new Date('2022-12-04'), 'Airlines', 'Carandiru', 249.99);

console.log(flight1);
