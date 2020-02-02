interface Human {
  name: string;
  age: number;
}

interface Alien {
  name: string;
  age: number;
}

const getName = (human: Human) => human.name;

const alien: Alien = {
  name: 'Yitvgen',
  age: 260,
};

getName(alien); // No error
