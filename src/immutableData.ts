{
  const person = {
    name: 'Ola',
    age: 23,
  };

  person.name = 'Aleksandra'; // ✅
}

{
  const person = {
    name: 'Ola',
    age: 23,
  } as const;

  person.name = 'Aleksandra'; // ❌
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
    name: 'Ola',
    age: 23,
  };

  person.name = 'Aleksandra'; // ❌
}

let foo = 'Foo'; // foo: string
const bar = 'Bar'; // bar: "Bar"
