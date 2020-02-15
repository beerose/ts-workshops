const isNumber = (x: unknown): x is number => {
  return typeof x === 'number';
};

const isUser = (x: unknown): x is User => {
  return (x as User).name != undefined && typeof (x as User).name === 'string';
};
