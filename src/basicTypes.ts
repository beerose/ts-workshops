let greeting: string;

let loading: boolean;

let count: number;

let list1: number[];
let list2: Array<number>;

let iDontKnow: any;
iDontKnow = 5;
iDontKnow = "or maybe it's a string";

let notify: void;
notify = undefined; // OK
notify = null; // OK if `strictNullChecks` is not set

// Unreachable end point
const error = (message: string): never => {
  throw new Error(message);
};

// Function never stops
const infiniteLoop = (): never => {
  while (true) {}
};

let user: object;
user = null;
user = { name: 'Jon', age: 32 };
