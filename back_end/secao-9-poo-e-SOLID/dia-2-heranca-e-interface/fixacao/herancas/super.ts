class SuperClass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }
  public sayHello(): void {
    console.log('Hello world!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const super1 = new SuperClass();
const sub1 = new SubClass();

function myFunc(sup: SuperClass): void {
  sup.sayHello();
  console.log(sup.isSuper ? 'Super!' : 'Sub!');
}

myFunc(super1);
myFunc(sub1);