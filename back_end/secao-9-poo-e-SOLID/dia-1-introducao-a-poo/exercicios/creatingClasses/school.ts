class Student {
  registration: string;
  name: string;
  avaliation1: number;
  avaliation2: number;
  avaliation3: number;
  avaliation4: number;
  project1: number;
  project2: number;

  constructor(
    registration: string,
    name: string,
    avaliation1: number,
    avaliation2: number,
    avaliation3: number,
    avaliation4: number,
    project1: number,
    project2: number
  ) {
    this.registration = registration;
    this.name = name;
    this.avaliation1 = avaliation1;
    this.avaliation2 = avaliation2;
    this.avaliation3 = avaliation3;
    this.avaliation4 = avaliation4;
    this.project1 = project1;
    this.project2 = project2;
  }

  sum() {
    return this.avaliation1 + this.avaliation2 + this.avaliation3 + this.avaliation4 + this.project1 + this.project2;
  }

  average() {
    return this.sum() / 6;
  }
}