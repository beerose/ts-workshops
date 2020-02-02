type Person = {
  name: string;
};

type Property = 'name';
let person1: Record<Property, string>;
let person2: { [key in Property]: string };

let dict1: Record<string, string>;
let dict2: { [key: string]: string };
