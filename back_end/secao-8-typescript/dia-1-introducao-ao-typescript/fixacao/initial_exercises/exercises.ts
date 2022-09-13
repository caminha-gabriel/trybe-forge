export function greeter(name: string):string {
  return `Hello ${name}`;
}

export function personAge(name: string, age: number): string {
  const nomenclature: string = age === 1 ? 'year' : 'years';

  return `${name} is ${age} ${nomenclature} old`;
}

export function add(x: number, y:number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function squareArea(side: number): number {
  return side ** 2;
}

export function rectangleArea(base: number, height: number): number {
  return base * height;
}