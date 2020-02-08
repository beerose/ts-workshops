const isNumber = (x: any): x is number => {
  return typeof x === 'number';
};

const isUser = (x: any): x is User => {
  return (x as User).name != undefined && typeof (x as User).name === 'string';
};
