type Item = {
  name: string;
  size: number;
  weight: number;
  dimensions: [number, number, number];
};

const update(item: Partial<Item>) => {
    //
}

type Partial<T> = { [P in keyof T]?: T[P] }; //builtin

type Person = {
    name: string;
}

const jon: Readonly<Person> = {
    name: 'Jon',
};

jon.name = 'Not Jon'; // error
/**
 * Cannot assign to 'name' because 
 * it is a read-only property.ts(2540)
 */

type User = {
    name: string;
    surename: string;
    city: string;
    country: string;
    address: string;
    zipcode: string;
}

type UserDisplayInfo = Pick<User, 'name' | 'surename'>;
type Pick<T, K extends keyof T> = {[key in K]: T[key]};

type UserWithoutZipcode = Omit<User, 'zipcode'>;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type P = Parameters<(x: string, y: number) => void>;
// [string, number]

type R = ReturnType<(x: string, y: number) => void>;
// void