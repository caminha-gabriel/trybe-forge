interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  public myFunc(myParam: number) {
    const sum = this.myNumber + myParam;
    return `The sum of ${myParam} and ${this.myNumber} is ${sum}`;
  }
}

const myObj = new MyClass(4);

console.log(myObj.myFunc(8));