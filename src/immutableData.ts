{
  const person = {
    name: 'Aleksandra',
    age: 23,
  };

  person.name = 'Ola'; // ✅
}

{
  const person = {
    name: 'Aleksandra',
    age: 23,
  } as const;

  person.name = 'Ola'; // ❌
  /**
   * const person2: {
   * readonly name: "Ola";
   * readonly age: 23;
   * }
   */
}

{
  type Person = {
    readonly name: string;
    age: number;
  };

  const person: Person = {
    name: 'Aleksandra',
    age: 23,
  };

  person.name = 'Ola'; // ❌
}

let foo = 'Foo'; // foo: string
const bar = 'Bar'; // bar: "Bar"
