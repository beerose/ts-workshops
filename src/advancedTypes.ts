{
  type AddressInfo = {
    street: string;
    city: string;
    postalCode: string;
  };

  type User = {
    name: string;
    surname?: string;
  };

  const fetchUser = (): AddressInfo & User => {
    return {
      name: 'Ola',
      street: 'Abcd',
      city: 'Wrocław',
      postalCode: '12345',
    };
  };
}

const checkPostalCode = (postalCode: string | number) => {
  // check if postal code is valid
};

type State = 'initial' | 'loading' | 'success' | 'error';

type NumericState = 0 | 1 | 2;

{
  type Human = {
    kind: 'human';
    name: string;
    surname: string;
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
}

const expenses = {
  food: 200,
  restaurants: 100,
  utilities: 100,
  cinema: 20,
  travels: 300,
  clothes: 20,
};

const getSum = <T extends Record<string, number>, K extends keyof T>(
  o: T,
  properties: K[],
) => {
  return properties.reduce((acc, p) => o[p] + acc, 0);
};

getSum(expenses, 'cosmetics'); // error
/**
 * Argument of type '"cosmetics"' is not assignable
 * to parameter of type
 * '("food" | "restaurants" | "utilities" | "cinema" | "travels" | "clothes")[]'
 * .ts(2345)
 */

{
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
}
