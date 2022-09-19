type Bird = {
  breed: string;
  fly: boolean;
  color: string;
};

type Sum = (x: number, y: number) => number;

type Address = {
  zipCode: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  unit: 'Apartment' | 'House';
};