interface Automobile {
  brand: string;
  color: string;
  turnLeft(): void;
  turnRight(): void;
};

interface Feline {
  specie: string;
  color: string;
  height: string;
  itMeows: boolean;
  meow(): string;
  eat(): string;
  sleep(): string;
}

interface Aircraft {
  model: string;
  maxSpeed: string;
  countryOfOrigin: string;
  creationDate: Date;
  takeFlight(): string;
  speedUp(): string;
  slowDown(): string;
};