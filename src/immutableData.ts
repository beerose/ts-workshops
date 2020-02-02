const person = {
  name: 'Ola',
  age: 23,
};

person.name = 'Aleksandra'; // OK

const person2 = {
  name: 'Ola',
  age: 23,
} as const;

person2.name = 'Aleksandra'; // Error
/*
const person2: {
  readonly name: "Ola";
  readonly age: 23;
}
*/

let foo = 'Foo'; // foo: string
const bar = 'Bar'; // bar: "Bar"
