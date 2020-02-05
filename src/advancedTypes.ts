type AddressInfo = {
  street: string;
  city: string;
  postalCode: string;
};

type User = {
  name: string;
  surename?: string;
};

const fetchUser = (): AddressInfo & User => {
  return {
    name: 'Ola',
    street: 'Abcd',
    city: 'Wrocław',
    postalCode: '12345',
  };
};

const checkPostalCode = (postalCode: string | number) => {
  // check if postal code is valid
};

const isNumber = (x: any): x is number => {
  return typeof x === 'number';
};

const isUser = (x: any): x is User => {
  return (x as User).name && typeof (x as User).name === 'string';
};

type State = 'initial' | 'loading' | 'success' | 'error';

type NumericState = 0 | 1 | 2;

type Human = {
  kind: 'human';
  name: string;
  surename: string;
  country: string;
};

type Alien = {
  kind: 'alien';
  name: string;
  color: string;
  planet: string;
  spaceship: string;
};

// Common, singleton type property — the discriminant.
// A type alias that takes the union of those types — the union.

type Someone = Human | Alien;

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}
function area(s: Someone) {
  switch (s.kind) {
    case 'human':
      return "Oh, it's just a human!";
    case 'alien':
      return "WOW, it's alien!";
    default:
      return assertNever(s);
  }
}

const getNormalized = <T>(o: T, properties: string[]) => {
  const newObject = {};
  properties.forEach(p => (newObject[p] = o[p]));
  return newObject;
};

const getNormalized2 = <T, K extends keyof T>(o: T, properties: K[]) => {
  let newObject: { [key in K]: T[K] };
  properties.forEach(p => (newObject[p] = o[p]));
  return newObject;
};

type Alien = {
  kind: 'alien';
  name: string;
  color: string;
  planet: string;
  spaceship: string;
};

type PartialAlien = {
  [P in keyof Alien]?: Alien[P];
};

// type PartialAlien = {
//   kind?: "alien";
//   name?: string;
//   color?: string;
//   planet?: string;
//   spaceship?: string;
// }
